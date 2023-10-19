// import TextButton from "@components/common/button/TextButton";

import { SearchRoom, ShowRoom } from "@components/search/index";

function RoomList() {
  // 여기서 room list를 받아서 출력할 예정

  return (
    <>
      <SearchRoom />
      <ShowRoom />
      <div>
        <button type="button">버튼 1</button>
        <button type="button">버튼 2</button>
      </div>
    </>
  );
}
export default RoomList;
