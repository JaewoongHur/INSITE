import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface HeaderModalState {
  openSite: boolean;
  openProfile: boolean;
  openDate: boolean;
}

const initialState: HeaderModalState = {
  openSite: false,
  openProfile: false,
  openDate: false,
};

const HeaderModalStateInfoSlice = createSlice({
  name: "HeaderModalStateInfo",
  initialState,
  reducers: {
    setOpenSite: (state, action: PayloadAction<boolean>) => {
      state.openSite = action.payload;
    },
    setOpenProfile: (state, action: PayloadAction<boolean>) => {
      state.openProfile = action.payload;
    },
    setOpenDate: (state, action: PayloadAction<boolean>) => {
      state.openDate = action.payload;
    },
  },
});

export const { setOpenSite, setOpenProfile, setOpenDate } =
  HeaderModalStateInfoSlice.actions;
export default HeaderModalStateInfoSlice.reducer;
