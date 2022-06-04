import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonGrid,
  IonRow,
  IonCol,
  IonCard,
  IonButtons,
  IonBackButton,
  IonCardContent,
  IonAlert,
} from "@ionic/react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteWord } from "../slices/cardSlice";

const DeleteCardList = ({ match }) => {
  const [showAlert, setShowAlert] = useState(false);
  const [target, setTarget] = useState(-1);

  const id = match.params.cardId;
  const ws = useSelector((state) => state.cards.card);
  const words = ws.find((data) => data.id === id);

  const dispatch = useDispatch();

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>{words.title}</IonTitle>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/" />
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonGrid>
          <IonRow>
            {words.content.map(({ word, translate }, index) => {
              return (
                <IonCol size="4" key={index}>
                  <IonCard
                    onClick={() => {
                      setTarget(index);
                      setShowAlert(true);
                    }}
                  >
                    <IonCardContent>
                      <h1
                        style={{
                          fontSize: 40,
                          textAlign: "center",
                        }}
                      >
                        {word}
                      </h1>
                      <p>
                        <br />
                      </p>
                      <h2 style={{ fontSize: 20, textAlign: "center" }}>
                        {translate}
                      </h2>
                    </IonCardContent>
                  </IonCard>
                </IonCol>
              );
            })}
          </IonRow>
        </IonGrid>
      </IonContent>
      <IonAlert
        isOpen={showAlert}
        onDidDismiss={() => setShowAlert(false)}
        cssClass="my-custom-class"
        message={"本当に消しますか？"}
        buttons={[
          {
            text: "キャンセル",
            role: "cancel",
          },
          {
            text: "OK",
            handler: () => {
              dispatch(deleteWord({ id, target }));
            },
          },
        ]}
      />
    </IonPage>
  );
};

export default DeleteCardList;
