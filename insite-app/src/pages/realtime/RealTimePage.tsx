import { RootState } from "@reducer";
import { useSelector } from "react-redux";
import { CalendarButton } from "@components/common/button";
import styled from "styled-components";

const CalendarContainer = styled.div`
  top: 0;
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: flex-end;
`;
const CalendarWrapper = styled.div`
  width: 30%;
  height: 10%;
  margin-right: 20px;
  cursor: pointer;
`;

function RealTimePage() {
  const realtimeStartDate = useSelector(
    (state: RootState) => state.DateSelectionInfo.realtimeDate.start,
  );

  const formatDateString = (dateString: string): string => {
    // 날짜 문자열을 '년', '월', '일'로 분리합니다.
    const parts = dateString.split("-");

    // 각 부분을 정수로 변환합니다 (앞에 '0'이 붙은 한 자리 숫자의 경우 제거됩니다).
    const year = parseInt(parts[0], 10);
    const month = parseInt(parts[1], 10);
    const day = parseInt(parts[2], 10);

    // 포맷팅된 문자열을 반환합니다.
    return `${year}년 ${month}월 ${day}일`;
  };

  // 사용 예시:
  const formattedDate = formatDateString(realtimeStartDate);
  console.log(formattedDate);
  return (
    <CalendarContainer>
      <CalendarWrapper>
        <CalendarButton
          width="100%"
          height="100%"
          startDate={formattedDate}
          endDate={formattedDate}
        />
      </CalendarWrapper>
    </CalendarContainer>
  );
}

export default RealTimePage;
