import { ImageButton } from "@components/common/button";
import Dropdown from "@components/common/dropdown/Dropdown";
import TitleText from "@components/common/textbox/TitleText";
import { RoomType } from "@customtype/dataTypes";
import { myRoomListState, selectedRoomState } from "@recoil/atom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { leftArrow } from "@assets/images";

interface MypageTitleProps {
  selectedRoom: RoomType;
  roomNum: number;
  setRoomNum: React.Dispatch<React.SetStateAction<number>>;
}

function MypageTitle({ selectedRoom, roomNum, setRoomNum }: MypageTitleProps) {
  const [roomList, setRoomList] = useRecoilState<RoomType[]>(myRoomListState);

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [, setNextRoom] = useRecoilState(selectedRoomState);
  const navi = useNavigate();

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

  function goToBack(): void {
    navi(-1);
  }

  return (
    <>
      <div className="flex justify-center items-center w-full">
        <ImageButton
          image={leftArrow}
          alt="뒤로가기"
          className="flex w-[10%] justify-center items-center"
          onClick={() => goToBack()}
        />
        <div className="flex flex-col justify-center items-center w-full pr-10 ">
          <button
            type="button"
            className="w-[70%] mt-5 mb-2"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            <TitleText
              text={selectedRoom ? selectedRoom.roomTitle : "방이 없습니다"}
              className="p-1 pr-5 pl-5 rounded-xl sm:h-[90px] h-[38px] bg-cg-9 overflow-x-auto items-start"
            />
          </button>
          {isDropdownOpen && (
            <div className="flex justify-center w-[50%]">
              {roomList.length === 0 ? (
                <div>방이 없습니다</div>
              ) : (
                <Dropdown
                  className=""
                  onClick={(roomId) => goToRoom(roomId)}
                  items={roomList.map((room) => ({
                    ...room,
                    roomTitle:
                      room.roomTitle.length > 10
                        ? `${room.roomTitle.slice(0, 10)}...`
                        : room.roomTitle,
                    roomId: room.roomId,
                    owner: room.memberId,
                    password: room.password,
                  }))}
                />
              )}
            </div>
          )}
        </div>
      </div>
      <div className="flex justify-center items-center">
        <button
          className="bg-cg-3 rounded-xl p-2 m-2"
          type="button"
          onClick={() => beforePage()}
        >
          이전
        </button>
        <p>
          {roomNum === null ? 1 : roomNum + 1} / {roomList.length}
        </p>
        <button
          className="bg-cg-3 rounded-xl p-2 m-2"
          type="button"
          onClick={() => nextPage()}
        >
          다음
        </button>
      </div>
    </>
  );
}

export default MypageTitle;
