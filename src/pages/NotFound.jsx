import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>404 Not Found</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">404 Not Found</IonTitle>
          </IonToolbar>
        </IonHeader>
        <Link to="/">Home</Link>
      </IonContent>
    </IonPage>
  );
};

export default NotFound;
