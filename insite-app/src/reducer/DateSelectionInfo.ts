import ParsingDate from "@components/ParsingDate";
import { DateSelectionType } from "@customtypes/dataTypes";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const todayDate = new Date();

const today: string = ParsingDate(todayDate);

const initialState: DateSelectionType = {
  start: "2000-01-01",
  end: today,
  past: "2000-01-01",
  latest: today,
};

const DateSelectionInfoSlice = createSlice({
  name: "DateSelectionInfo",
  initialState,
  reducers: {
    setStartDate: (state, action: PayloadAction<string>) => {
      state.start = action.payload;
    },
    setEndDate: (state, action: PayloadAction<string>) => {
      state.end = action.payload;
    },
    setPastDate: (state, action: PayloadAction<string>) => {
      state.past = action.payload;
    },
    setLatestDate: (state, action: PayloadAction<string>) => {
      state.latest = action.payload;
    },
  },
});

export const { setStartDate, setEndDate, setPastDate, setLatestDate } =
  DateSelectionInfoSlice.actions;
export default DateSelectionInfoSlice.reducer;
