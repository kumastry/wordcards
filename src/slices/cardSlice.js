import { createSlice } from "@reduxjs/toolkit";

export const cardsSlice = createSlice({
  name: "cards",
  initialState: {
    card: [],
  },
  reducers: {
    addCard(state, action) {
      state.card.push(action.payload);
    },
    deleteCard(state, action) {
      const { cid } = action.payload;
      console.log(cid);
      const sliceid = state.card.findIndex((data) => {
        return data.id === cid;
      });
      console.log(sliceid);
      if (cid !== -1) {
        state.card.splice(sliceid, 1);
      }
    },
    addWord(state, action) {
      const { Id, word, translate } = action.payload;
      const existingCard = state.card.find((data) => {
        return data.id === Id;
      });

      if (existingCard) {
        existingCard.content.push({
          word,
          translate,
        });
      }
    },
    deleteWord(state, action) {
      const { id, target } = action.payload;
      const sliceId = state.card.findIndex((data) => {
        return data.id === id;
      });
      state.card[sliceId].content.splice(target, 1);
    },

    changeRandom(state, action) {
      const id = action.payload;
      const sliceid = state.card.findIndex((data) => {
        return data.id === id;
      });
      state.card[sliceid].random = !state.card[sliceid].random;
    },
    changeFour(state, action) {
      const id = action.payload;
      const sliceid = state.card.findIndex((data) => {
        return data.id === id;
      });
      state.card[sliceid].four = !state.card[sliceid].four;
    },
    changeStrict(state, action) {
      const id = action.payload;
      const sliceid = state.card.findIndex((data) => {
        return data.id === id;
      });
      state.card[sliceid].strict = !state.card[sliceid].strict;
    },
    changeReverse(state, action) {
      const id = action.payload;
      const sliceid = state.card.findIndex((data) => {
        return data.id === id;
      });
      state.card[sliceid].reverse = !state.card[sliceid].reverse;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  addCard,
  addWord,
  deleteWord,
  deleteCard,
  changeRandom,
  changeFour,
  changeStrict,
  changeReverse,
} = cardsSlice.actions;

export default cardsSlice.reducer;
