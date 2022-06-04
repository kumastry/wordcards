import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import cardsReducer from "../slices/cardSlice";
import achievementsReducer from "../slices/achievementSlice";
import { save, load } from "redux-localstorage-simple";

export default configureStore({
  reducer: {
    achievements: achievementsReducer,
    cards: cardsReducer,
  },

  preloadedState: load(),
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(save()),
});
