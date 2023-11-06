import ParsingDate from "@components/ParsingDate";
import { DateSelectionType } from "@customtypes/dataTypes";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const todayDate = new Date();

const today: string = ParsingDate(todayDate);

const initialState: DateSelectionType = { start: today, end: today };

const DateSelectionInfoSlice = createSlice({
  name: "DateSelectionInfo",
  initialState,
  reducers: {
    setDate: (state, action: PayloadAction<string>) => {
      state.start = action.payload;
      state.end = action.payload;
    },
  },
});

export const { setDate } = DateSelectionInfoSlice.actions;
export default DateSelectionInfoSlice.reducer;
