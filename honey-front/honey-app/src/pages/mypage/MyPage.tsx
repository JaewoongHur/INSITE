import { ButtomMenu, Cupboard } from "@components/mypage";
import MypageTitle from "@components/mypage/MypageTitle";
import { RoomType } from "@customtype/dataTypes";
import { myRoomListState, selectedRoomState } from "@recoil/atom";
import axios from "axios";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";

function MyPage() {
  const [roomList, setRoomList] = useRecoilState<RoomType[]>(myRoomListState);
  const [roomNum, setRoomNum] = useState<number>(0);
  const [selectedRoom, setSelectedRoom] =
    useRecoilState<RoomType>(selectedRoomState);
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("api/v1/rooms/list").then((response) => {
      const data = response.data;
    });
  }, []);

  useEffect(() => {
    setRoomList(data);
    console.log(roomList);
    if (roomNum !== null) {
      if (roomNum >= 0 && roomNum < roomList.length) {
        setSelectedRoom(roomList[roomNum]);
      } else if (roomNum >= roomList.length) {
        setRoomNum(0);
      } else if (roomNum < 0) {
        setRoomNum(roomList.length - 1);
      }
    } else {
      setRoomNum(0);
    }
  }, [roomNum, data, roomList, setRoomList, setSelectedRoom]);

  return (
    <>
      <MypageTitle
        selectedRoom={selectedRoom}
        roomNum={roomNum}
        setRoomNum={setRoomNum}
      />
      <Cupboard />
      <ButtomMenu />
    </>
  );
}

export default MyPage;
