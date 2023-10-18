// import TextButton from "@components/common/button/TextButton";
import SearchRoom from "@components/search";
import roomListState from "@recoil/atom/roomListState";
import roomState from "@recoil/atom/roomState";
import { useRecoilValue } from "recoil";

function RoomList() {
  // 여기서 room list를 받아올 예정
  const roomList = useRecoilValue(roomListState);
  const temp = useRecoilValue(roomState);
  return (
    <>
      <SearchRoom />
      <div>{temp}</div>
    </>
  );
}
export default RoomList;
