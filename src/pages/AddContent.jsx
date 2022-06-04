import { useState } from "react";
import {
  IonList,
  IonItem,
  IonInput,
  IonTextarea,
  IonItemDivider,
  IonLabel,
  IonToast,
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButton,
  IonButtons,
  IonBackButton,
} from "@ionic/react";
import Addbutton from "../components/Addbutton";
import { useDispatch, useSelector } from "react-redux";
import { addWord } from "../slices/cardSlice";

const AddContent = ({ match }) => {
  const [wordtext, setWordText] = useState("");
  const [transtext, setTransText] = useState("");
  const [toast1, setToast1] = useState(false);
  const dispatch = useDispatch();
  const Id = match.params;

  const id = match.params.cardId;
  const WS = useSelector((state) => state.cards.card);
  const Words = WS.find((data) => data.id === id);

  const translatehandle = async () => {
    const res = await fetch(
      `https://script.google.com/macros/s/AKfycbzh5wdA-X_EqDKU6x2ZE32il0EqONbl6gqiVzhIENGSeoxYb-8C7Ud9E5t4gaOqIxZf5A/exec?text=${wordtext}&source=en&target=ja`
    );
    const transjson = await res.json();
    console.log(transjson);
    if (transjson.text !== "Bad Request") {
      setTransText(transjson.text);
    }
  };

  const handleClick = () => {
    dispatch(
      addWord({
        Id: Id.cardId,
        word: wordtext,
        translate: transtext,
      })
    );

    setTransText("");
    setWordText("");
    setToast1(true);
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>{Words.title}</IonTitle>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/" />
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">{Words.title}</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonList style={{ height: "80%" }}>
          <IonItemDivider>
            <IonLabel>
              <h1 style={{ color: "black" }}>単語を追加</h1>
            </IonLabel>
          </IonItemDivider>

          <IonItem>
            <IonInput
              value={wordtext}
              placeholder="単語を入力"
              onIonChange={(e) => {
                setWordText(e.target.value);
              }}
            ></IonInput>
          </IonItem>

          <IonItem>
            <IonTextarea
              value={transtext}
              placeholder="訳を入力"
              onIonChange={(e) => {
                setTransText(e.target.value);
              }}
            ></IonTextarea>
          </IonItem>

          <IonButton expand="block" onClick={translatehandle}>
            翻訳する
          </IonButton>

          

          <IonToast
            isOpen={toast1}
            onDidDismiss={() => setToast1(false)}
            message="単語を追加しました  "
            duration={500}
            translucent={true}
          />
        </IonList>

        <Addbutton handleClick={handleClick} />
        
      </IonContent>
    </IonPage>
  );
};

export default AddContent;
