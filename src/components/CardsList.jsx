import { useState } from "react";
import {
  IonList,
  IonItem,
  IonActionSheet,
  IonCardHeader,
  IonCardTitle,
} from "@ionic/react";
import { trash, caretForwardCircle, close } from "ionicons/icons";
import { useDispatch, useSelector } from "react-redux";
import { deleteCard } from "../slices/cardSlice";
import "../style/style.css";

const CardsList = () => {
  const [showActionSheet, setShowActionSheet] = useState(false);
  const [alert, setAlert] = useState(false);
  const [cid, setCid] = useState("");
  const dispatch = useDispatch();
  const wordCards = useSelector((state) => state.cards);
  const exist = wordCards.card.length ? true : false;

  const ActionSheet = () => {
    return (
      <>
        <IonActionSheet
          isOpen={showActionSheet}
          onDidDismiss={() => setShowActionSheet(false)}
          buttons={[
            {
              text: "単語帳を見る",
              icon: caretForwardCircle,
              handler: () => {
                window.location.href = `/words/${cid}`;
              },
            },
            {
              text: "単語テストをする",
              icon: caretForwardCircle,
              handler: () => {
                window.location.href = `/ready/${cid}`;
              },
            },
            {
              text: "単語を追加",
              icon: caretForwardCircle,
              handler: () => {
                window.location.href = `/add/${cid}`;
              },
            },
            {
              text: "単語を消す",
              role: "destructive",
              icon: trash,
              handler: () => {
                window.location.href = `/delete/${cid}`;
              },
            },
            {
              text: "単語帳を消す",
              role: "destructive",
              icon: trash,
              handler: () => {
                dispatch(deleteCard({ cid }));
              },
            },
            {
              text: "キャンセル",
              role: "cancel",
              icon: close,
            },
          ]}
        />
      </>
    );
  };

  const showAct = (tid) => {
    setCid(tid);
    setShowActionSheet(true);
  };

  const list = () => {
    return (
      <>
        <IonList>
          {wordCards.card.map((data, index) => {
            return (
              <IonItem key={index} onClick={() => showAct(data.id)}>
                <IonCardHeader>
                  <IonCardTitle>{data.title}</IonCardTitle>
                </IonCardHeader>
              </IonItem>
            );
          })}
        </IonList>
        <ActionSheet />
      </>
    );
  };

  const none = () => {
    return (
      <div className="container">
        <p>右下のボタンから単語帳を登録してみよう！</p>
      </div>
    );
  };

  return (
    <>
      {exist ? list() : none()}
      {/* <IonList>
        {wordCards.card.map((data, index) => {
          return (
            <IonItem key={index} onClick={() => showAct(data.id)}>
              <IonCardHeader>
                <IonCardTitle>{data.title}</IonCardTitle>
              </IonCardHeader>
            </IonItem>
          );
        })}
      </IonList>
      <ActionSheet /> */}
    </>
  );
};

export default CardsList;
