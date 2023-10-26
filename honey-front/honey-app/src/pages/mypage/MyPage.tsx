import { ButtomMenu, Cupboard } from "@components/mypage";
import MypageTitle from "@components/mypage/MypageTitle";
import { RoomType } from "@customtype/dataTypes";
import { myRoomListState } from "@recoil/atom";
import axios from "axios";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";

function MyPage() {
  const [roomList, setRoomList] = useRecoilState<RoomType[]>(myRoomListState);
  const [roomNum, setRoomNum] = useState<number>(0);
  const [selectedRoom, setSelectedRoom] = useState<RoomType | null>(null);
  const { VITE_API_URL } = import.meta.env;
  const token = sessionStorage.getItem("Authorization");

  useEffect(() => {
    // Axios를 사용하여 데이터 가져오기
    const config = {
      headers: {
        Authorization: token,
      },
    };

    axios
      .get(`http://localhost:8080/api/v1/rooms/list`, config)
      .then((response) => {
        const { data } = response;
        const getList = data.roomDtoList;
        console.log(getList);
        // Recoil 상태 업데이트
        if (getList.length > 0) {
          setRoomList(() => [...data.roomDtoList]);
          setRoomNum(0);
        }
      })
      .catch((error) => {
        console.error("Error fetching room list:", error);
      });
  }, [setRoomList, token]);

  useEffect(() => {
    if (roomNum !== null) {
      console.log("선택된 방: ", selectedRoom);
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
  }, [roomNum, roomList, setSelectedRoom, selectedRoom]);

  return (
    <>
      <MypageTitle
        selectedRoom={selectedRoom}
        roomNum={roomNum}
        y
        setRoomNum={setRoomNum}
      />
      <Cupboard />
      <ButtomMenu />
    </>
  );
}

export default MyPage;
