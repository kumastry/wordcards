import {
  IonContent,
  IonGrid,
  IonRow,
  IonCol,
  IonCard,
  IonButton,
  IonText,
} from "@ionic/react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const ResultSet = ({ errorSet, correct, wordCardsLength }) => {
  return (
    <IonContent fullscreen>
      <IonGrid>
        <IonCard>
          <IonRow>
            <IonCol className="ion-margin">
              <IonText>正解率</IonText>

              <CircularProgressbar
                value={correct}
                maxValue={wordCardsLength}
                text={`${Math.floor((correct / wordCardsLength) * 100)} %`}
              />
            </IonCol>

            <IonCol className="ion-margin">
              <IonText>不正解だった単語</IonText>
              <IonGrid>
                <IonCard>
                  <IonRow>
                    {errorSet.map((data, index) => {
                      return (
                        <IonCol size="6" key={index}>
                          <IonText>{`・${data}`}</IonText>
                        </IonCol>
                      );
                    })}
                  </IonRow>
                </IonCard>
              </IonGrid>
            </IonCol>
            {/* <IonCol className="ion-margin">
              <IonText>何か</IonText>
              <CircularProgressbar
                value={correct}
                maxValue={wordCardsLength}
                text={correct}
              />
            </IonCol> */}
          </IonRow>
        </IonCard>
      </IonGrid>
    </IonContent>
  );
};

export default ResultSet;
