import { createSlice } from "@reduxjs/toolkit";
import { ACHIEVEMENTS, ACHIEVEMENT_TYPE } from "../const/achievement";

const initialState = {
  achievedNames: [],
  continuousCollectCount: 0,
  totalCollectCount: 0,
};

export const achievementsSlice = createSlice({
  name: "achievements",
  initialState,
  reducers: {
    continuousCountUp: (state, action) => {
      if (action.payload === 1) {
        state.continuousCollectCount += 1;
      } else {
        state.continuousCollectCount *= 0;
      }
    },
    totalCollectCountUp: (state, action) => {
      state.totalCollectCount += action.payload; // 渡された引数だけtotalCollectCountが増える
    },

    toggleAchievement: (state, action) => {
      const { targetType } = action.payload;

      if (targetType === "collect") {
        const achievedNameSet = new Set(state.achievedNames);
        ACHIEVEMENTS.forEach((achievement) => {
          if (
            achievement.type === ACHIEVEMENT_TYPE[targetType].continuous &&
            state.continuousCollectCount >= achievement.release
          ) {
            achievedNameSet.add(achievement.name);
          }
          if (
            achievement.type === ACHIEVEMENT_TYPE[targetType].total &&
            state.totalCollectCount >= achievement.release
          ) {
            achievedNameSet.add(achievement.name);
          }
        });
        const achievementNames = Array.from(achievedNameSet);
        // localStorage.setItem("achivements", achievementNames);
        state.achievedNames = achievementNames;
      }
    },
  },
});

export const { toggleAchievement, totalCollectCountUp, continuousCountUp } =
  achievementsSlice.actions;

export default achievementsSlice.reducer;
