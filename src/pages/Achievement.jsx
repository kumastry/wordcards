import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonGrid,
  IonRow,
  IonCol,
  IonCard,
  IonCardContent,
  IonAlert,
} from "@ionic/react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { ACHIEVEMENTS } from "../const/achievement";

const Achievement = () => {
  // localStorage.clear();
  const [showModal, setShowModal] = useState(false);
  const [message, setMessage] = useState("");
  const { achievedNames } = useSelector((state) => state.achievements);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>実績一覧</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonGrid>
          <IonRow>
            {ACHIEVEMENTS.map((achievement) => {
              return (
                <IonCol size="4" key={achievement.name}>
                  <IonCard
                    onClick={() => {
                      if (!achievedNames?.includes(achievement.name)) {
                        setMessage(achievement.hint);
                        setShowModal(true);
                      }
                    }}
                  >
                    <IonCardContent>
                      {achievedNames?.includes(achievement.name)
                        ? achievement.name
                        : "???"}
                    </IonCardContent>
                  </IonCard>
                </IonCol>
              );
            })}
          </IonRow>
        </IonGrid>
      </IonContent>
      <IonAlert
        isOpen={showModal}
        onDidDismiss={() => setShowModal(false)}
        cssClass="my-custom-class"
        header={"実績解除のヒント"}
        message={message}
        buttons={[
          {
            text: "閉じる",
            role: "cancel",
          },
        ]}
      />
    </IonPage>
  );
};

export default Achievement;
