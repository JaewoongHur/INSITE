// import TextButton from "@components/common/button/TextButton";
import { ImageButton } from "@components/common/button";
import { TextInput } from "@components/common/input";
import roomListState from "@recoil/atom/roomListState";
import { RoomType } from "@customtype/dataTypes";
import { useState } from "react";
import { useRecoilState } from "recoil";

function SearchRoom() {
  const imgAddress: string = "src/assets/images/search.png";
  const [inputSearch, setInputSearch] = useState<string>("");
  const [roomList, setRoomList] = useRecoilState<RoomType[]>(roomListState);

  const dummyRoom: RoomType[] = [
    {
      roomId: 1,
      roomName: "동현이 방",
      owner: "동현",
      isOpen: true,
    },
    {
      roomId: 2,
      roomName: "동현이 안방",
      owner: "현동이",
      isOpen: false,
    },
    {
      roomId: 3,
      roomName: "동현이 옆방",
      owner: "홍뎐이",
      isOpen: true,
    },
  ];

  const searchRoom = () => {
    // 이 부분에서 방 목록을 호출하는 axios통신 코드 작성
    // dummy test
    setRoomList(dummyRoom);
    setInputSearch("");
  };

  return (
    <div className="flex h-24 items-center justify-center">
      <div className="flex w-4/5 justify-end">
        <TextInput
          value={inputSearch}
          holder="방을 검색하세요"
          className="h-12 w-5/6 m-5 p-1"
          onChange={(e) => setInputSearch(e.target.value)}
          onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) =>
            e.key === "Enter" && searchRoom()
          }
        />
      </div>
      <ImageButton
        image={imgAddress}
        alt="검색"
        className="flex items-center justify-start w-1/6 m-3 p-1"
        onClick={searchRoom}
      />
    </div>
  );
}
export default SearchRoom;
