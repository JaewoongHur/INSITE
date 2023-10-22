import Dropdown from "@components/common/dropdown/Dropdown";
import TitleText from "@components/common/textbox/TitleText";
import { RoomType } from "@customtype/dataTypes";
import { myRoomListState, selectedRoomState } from "@recoil/atom";
import { useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";

interface MypageTitleProps {
  selectedRoom: RoomType | null;
  roomNum: number | null;
  setRoomNum: React.Dispatch<React.SetStateAction<number | null>>;
}

function MypageTitle({ selectedRoom, roomNum, setRoomNum }: MypageTitleProps) {
  const roomList = useRecoilValue<RoomType[]>(myRoomListState);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [, setNextRoom] = useRecoilState(selectedRoomState);

  function goToRoom(roomId: number) {
    // roomId로 나중에 axios통신해서 room하나 받아와서 set해주기
    setNextRoom(roomList[roomId]);
  }

  function nextPage(): void {
    if (roomNum === null) {
      setRoomNum(0);
    } else {
      setRoomNum(roomNum + 1);
    }
  }

  function beforePage(): void {
    if (roomNum === null) {
      setRoomNum(0);
    } else {
      setRoomNum(roomNum - 1);
    }
  }

  return (
    <>
      <div className="flex flex-col justify-center items-center w-full">
        <button
          type="button"
          className="w-[50%] mt-5 mb-2"
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        >
          <TitleText
            text={selectedRoom ? selectedRoom.roomName : "방이 없습니다"}
            className="p-1 pr-5 pl-5 rounded-xl bg-cg-3"
          />
        </button>
        {isDropdownOpen && (
          <div className="flex justify-center w-[50%]">
            <Dropdown
              className=""
              onClick={(roomId) => goToRoom(roomId)}
              items={roomList.map((room) => ({
                roomName:
                  room.roomName.length > 10
                    ? `${room.roomName.slice(0, 10)}...`
                    : room.roomName,
                roomId: room.roomId,
                owner: room.owner,
                password: room.password,
              }))}
            />
          </div>
        )}
      </div>
      <div className="flex justify-center items-center">
        <button
          className="bg-cg-3 rounded-xl p-2 m-2"
          type="button"
          onClick={() => beforePage()}
        >
          감소 버튼
        </button>
        <p>
          {roomNum === null ? 1 : roomNum + 1} / {roomList.length}
        </p>
        <button
          className="bg-cg-3 rounded-xl p-2 m-2"
          type="button"
          onClick={() => nextPage()}
        >
          증가 버튼
        </button>
      </div>
    </>
  );
}

export default MypageTitle;
