import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export type TUtilsState = {
  settings: {
    number_of_grids: 3 | 4 | 5;
    level: "easy" | "normal" | "hard";
  };
};

const initialState: TUtilsState = {
  settings: { number_of_grids: 3, level: "easy" },
};

const utilsSlice = createSlice({
  name: "utils",
  initialState,
  reducers: {
    setSettings: (state, action: PayloadAction<TUtilsState["settings"]>) => {
      state.settings = action.payload;
    },
  },
});

export const { setSettings } = utilsSlice.actions;

export default utilsSlice.reducer;
