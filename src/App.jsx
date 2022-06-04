import { Route } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
} from "@ionic/react";

import { useDispatch, useSelector } from "react-redux";
import { IonReactRouter } from "@ionic/react-router";
import { pricetags, ribbon } from "ionicons/icons";
import Tab1 from "./pages/Main";
import Achievement from "./pages/Achievement";

import Ready from "./pages/Ready";
import NotFound from "./pages/NotFound";
import Cardcontent from "./pages/Cardcontent";
import AddContent from "./pages/AddContent";
import Test from "./pages/Test";
import DeleteCardList from "./pages/DeleteCardList";

import { toggleAchievement } from "./slices/achievementSlice";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";

const App = () => {
  const { totalCollectCount, continuousCollectCount } = useSelector(
    (state) => state.achievements
  );
  const dispatch = useDispatch();
  const [urlState, setUrlState] = useState("");
  window.onunload = function () {
    // IE以外用。ここは空でOKです
  };
  window.onpageshow = function (event) {
    if (event.persisted) {
      window.location.reload();
    }
  };
  useEffect(() => {
    setUrlState(window.location.pathname.split("/")[1]);
    console.log(window.location.pathname.split("/")[1]);
  }, []);
  useEffect(() => {
    dispatch(toggleAchievement({ targetType: "collect" }));
  }, [totalCollectCount, continuousCollectCount]);

  return (
    <IonApp>
      <IonReactRouter>
        <IonTabs>
          <IonRouterOutlet>
            <Route exact path="/" component={Tab1} />
            <Route exact path="/words/:cardId" component={Cardcontent} />
            <Route exact path="/add/:cardId" component={AddContent} />
            <Route exact path="/delete/:cardId" component={DeleteCardList} />

            <Route exact path="/achivement">
              <Achievement />
            </Route>

            <Route exact path="/test/:cardId" component={Test} />
            <Route exact path="/ready/:cardId" component={Ready} />

            <Route component={NotFound} />
          </IonRouterOutlet>

          <IonTabBar slot="bottom" hidden={false}>
            <IonTabButton tab="tab1" href="/">
              <IonIcon icon={pricetags} />
              <IonLabel>メイン</IonLabel>
            </IonTabButton>

            <IonTabButton tab="Achivement" href="/achivement">
              <IonIcon icon={ribbon} />
              <IonLabel>実績</IonLabel>
            </IonTabButton>
          </IonTabBar>
        </IonTabs>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
