import { useEffect, useState } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@reducer";
import { ItemType } from "@customtypes/dataTypes";
import DropDown from "../dropdown/DropDown";

const StartDateSelectContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: row;
  width: 100%;
  height: 100%;
  font-size: 1.2rem;
`;

interface StartDateSelectProps {
  onChange: (item: string) => void;
  openDropStartYear: boolean;
  closeDropStartYear: () => void;
  toggleDropStartYear: () => void;
  openDropStartMonth: boolean;
  closeDropStartMonth: () => void;
  toggleDropStartMonth: () => void;
  openDropStartDay: boolean;
  closeDropStartDay: () => void;
  toggleDropStartDay: () => void;
}

function StartDateSelect({
  onChange,
  openDropStartYear,
  closeDropStartYear,
  toggleDropStartYear,
  openDropStartMonth,
  closeDropStartMonth,
  toggleDropStartMonth,
  openDropStartDay,
  closeDropStartDay,
  toggleDropStartDay,
}: StartDateSelectProps) {
  const dispatch = useDispatch();
  const isLeapYear = (year: number) => {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
  };
  const pastDate = useSelector(
    (state: RootState) => state.DateSelectionInfo.past,
  );
  const endDate = useSelector(
    (state: RootState) => state.DateSelectionInfo.end,
  );
  const latestDate = useSelector(
    (state: RootState) => state.DateSelectionInfo.latest,
  );

  const startDate = useSelector(
    (state: RootState) => state.DateSelectionInfo.start,
  );

  const parseString = (dateStr: string) => {
    const [year, month, day] = dateStr.split("-");
    return [year, month, day];
  };

  const [startYear, setStartYear] = useState(parseString(startDate)[0]);
  const [startMonth, setStartMonth] = useState(parseString(startDate)[1]);
  const [startDay, setStartDay] = useState(parseString(startDate)[2]);

  const parseDate = (dateStr: string) => {
    const [year, month, day] = dateStr.split("-").map(Number);
    return new Date(year, month - 1, day); // 월은 0에서 시작합니다.
  };
  const pastDateObj = parseDate(pastDate);
  const endDateObj = endDate ? parseDate(endDate) : parseDate(latestDate);

  const getYearsInRange = (start: Date, end: Date) => {
    const years = [];
    for (let year = start.getFullYear(); year <= end.getFullYear(); year += 1) {
      years.push(year.toString());
    }
    return years;
  };

  const getMonthsInRange = (start: Date, end: Date) => {
    const months = [];
    // 시작과 종료가 같은 년도일 때만
    if (start.getFullYear() === end.getFullYear()) {
      for (let month = start.getMonth(); month <= end.getMonth(); month += 1) {
        months.push((month + 1).toString()); // 실제 월은 1에서 시작합니다.
      }
    } else {
      // 전체 12개월
      for (let month = 1; month <= 12; month += 1) {
        months.push(month.toString());
      }
    }
    return months;
  };

  const getDaysInRange = (start: Date, end: Date) => {
    const days = [];
    // 시작과 종료 날짜가 같은 년, 같은 월일 때만
    if (
      start.getFullYear() === end.getFullYear() &&
      start.getMonth() === end.getMonth()
    ) {
      for (let day = start.getDate(); day <= end.getDate(); day += 1) {
        days.push(day.toString());
      }
    } else {
      // 해당 월의 마지막 일자를 계산합니다.
      const month = start.getMonth();
      const year = start.getFullYear();
      let lastDayOfMonth;

      if (month === 1) {
        // 2월의 경우
        lastDayOfMonth = isLeapYear(year) ? 29 : 28;
      } else {
        lastDayOfMonth = new Date(year, month + 1, 0).getDate();
      }

      for (let day = 1; day <= lastDayOfMonth; day += 1) {
        days.push(day.toString());
      }
    }
    return days;
  };

  const yearArray = getYearsInRange(pastDateObj, endDateObj);

  const monthArray = getMonthsInRange(pastDateObj, endDateObj);

  const dayArray = getDaysInRange(pastDateObj, endDateObj);

  const yearOptions: ItemType[] = yearArray.map((year, index) => {
    return { id: index, name: year };
  });
  const monthOptions: ItemType[] = monthArray.map((month, index) => {
    return { id: index, name: month };
  });
  const dayOptions: ItemType[] = dayArray.map((day, index) => {
    return { id: index, name: day };
  });

  const handleStartYear = (item: ItemType) => {
    setStartYear(item.name);
  };
  const handleStartMonth = (item: ItemType) => {
    setStartMonth(item.name);
  };
  const handleStartDay = (item: ItemType) => {
    setStartDay(item.name);
  };

  useEffect(() => {
    const newStartDate: string = `${startYear}-${startMonth}-${startDay}`;
    onChange(newStartDate);
  }, [startYear, startMonth, startDay, dispatch, onChange]);

  return (
    <StartDateSelectContainer>
      <DropDown
        items={yearOptions}
        width="20%"
        height="3rem"
        initialValue={parseString(startDate)[0]}
        onChange={handleStartYear}
        openDropdown={openDropStartYear}
        close={closeDropStartYear}
        toggle={toggleDropStartYear}
      />
      년
      <DropDown
        items={monthOptions}
        width="20%"
        height="3rem"
        initialValue={parseString(startDate)[1]}
        onChange={handleStartMonth}
        openDropdown={openDropStartMonth}
        close={closeDropStartMonth}
        toggle={toggleDropStartMonth}
      />
      월
      <DropDown
        items={dayOptions}
        width="20%"
        height="3rem"
        initialValue={parseString(startDate)[2]}
        onChange={handleStartDay}
        openDropdown={openDropStartDay}
        close={closeDropStartDay}
        toggle={toggleDropStartDay}
      />
      일
    </StartDateSelectContainer>
  );
}

export default StartDateSelect;
