import { IonFabButton, IonIcon, IonFab } from "@ionic/react";
import { add } from "ionicons/icons";

const Addbutton = (props) => {
  return (
    <IonFab vertical="bottom" horizontal="end" slot="fixed">
      <IonFabButton onClick={props.handleClick}>
        <IonIcon icon={add} />
      </IonFabButton>
    </IonFab>
  );
};

export default Addbutton;
