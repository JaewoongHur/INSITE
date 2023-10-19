import { RoomButton } from "@components/common/button";
import roomListState from "@recoil/atom/roomListState";
import { RoomType } from "@customtype/dataTypes";
import { useRecoilValue } from "recoil";

function ShowRoom() {
  const roomList = useRecoilValue(roomListState);

  function gotoRoom(room: RoomType) {
    // 룸으로 이동
    // eslint-disable-next-line no-console
    console.log(room.roomId);
  }

  return (
    <>
      <h2 className="h-[90px] text-center">방 목록</h2>
      <div className="flex flex-col bg-board h-[640px] w-full items-center justify-center bg-cover bg-size m-0 p-0">
        <div className="flex w-full h-12 justify-center items-end">
          <div className="flex w-[65%]">
            <p className="text-white w-[12%] text-left">공개</p>
            <p className="text-white w-[20%]">방 번호</p>
            <p className="text-white w-[46%]">방 이름</p>
            <p className="text-white w-[26%]">주최자</p>
          </div>
        </div>
        <div className="flex flex-col h-[400px] w-4/5 items-center justify-center">
          {roomList.map((room) => (
            <div className="flex w-full h-20 justify-center" key={room.roomId}>
              <RoomButton
                className="bg-cg-5 w-5/6 h-15 roomBtn rounded-2xl m-0"
                key={room.roomId}
                room={room}
                onClick={() => gotoRoom(room)}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default ShowRoom;
