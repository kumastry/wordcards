import { useState } from "react";
import {
  IonPage,
  IonToggle,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonCard,
  IonLabel,
  IonItem,
  IonButton,
  IonButtons,
  IonBackButton,
} from "@ionic/react";
import { useSelector, useDispatch } from "react-redux";
import {
  changeRandom,
  changeReverse,
  changeFour,
  changeStrict,
} from "../slices/cardSlice";

const Ready = ({ match }) => {
  // localStorage.clear();
  const Id = match.params.cardId;
  const WS = useSelector((state) => state.cards.card);
  const Words = WS.find((data) => data.id === Id);

  const [random, setRandom] = useState(Words.random);
  const [four, setFour] = useState(Words.four);
  // const [strict, setStrict] = useState(Words.strict);
  const [reverse, setReverse] = useState(Words.reverse);

  const dispatch = useDispatch();

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
        <IonCard>
          <IonItem>
            <IonLabel>
              <h2>ランダムに出題</h2>
              <p>単語の並びをランダムにします。</p>
            </IonLabel>
            <IonToggle
              checked={random}
              onIonChange={(e) => {
                setRandom(e.detail.checked);
                dispatch(changeRandom(Id));
              }}
            />
          </IonItem>
          <IonItem>
            <IonLabel>
              <h2>問題を四択にする</h2>
              <p>入力形式から選択形式にします。</p>
            </IonLabel>
            <IonToggle
              checked={four}
              onIonChange={(e) => {
                setFour(e.detail.checked);
                dispatch(changeFour(Id));
              }}
            />
          </IonItem>
          {/* <IonItem>
            <IonLabel>
              <h2>strictモードにする</h2>
              <p>文字列が完全に一致しているとき正解になります。</p>
            </IonLabel>
            <IonToggle
              checked={strict}
              disabled={four}
              onIonChange={(e) => {
                setStrict(e.detail.checked);
                dispatch(changeStrict(Id));
              }}
            />
          </IonItem> */}
          <IonItem>
            <IonLabel>
              <h2>単語を裏返す</h2>
              <p>単語の訳を表にします。</p>
            </IonLabel>
            <IonToggle
              checked={reverse}
              onIonChange={(e) => {
                setReverse(e.detail.checked);
                dispatch(changeReverse(Id));
              }}
            />
          </IonItem>
        </IonCard>
      </IonContent>
      <IonButton
        className="ion-margin"
        expand="block"
        routerLink={`/test/${Id}`}
      >
        単語テストを始める
      </IonButton>
    </IonPage>
  );
};

export default Ready;
