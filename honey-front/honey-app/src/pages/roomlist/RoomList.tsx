import TitleText from "@components/common/textbox/TitleText";
import {
  ButtomButton,
  PageMove,
  SearchRoom,
  ShowRoom,
} from "@components/search/index";
import { RoomType } from "@customtype/dataTypes";
import { roomListState, selectedPageState } from "@recoil/atom";
import axios from "axios";
import { useEffect } from "react";
import { useRecoilState } from "recoil";

function RoomList() {
  // 방 목록 가져오기
  const [, setRoomList] = useRecoilState<RoomType[]>(roomListState);
  const [selectedPage] = useRecoilState<number>(selectedPageState);
  // const [title] = useRecoilState<string>(inputSearchState);
  const token = sessionStorage.getItem("Authorization");

  useEffect(() => {
    const config = {
      headers: {
        Authorization: token,
      },
    };

    axios
      .get(
        // `http://localhost:8080/api/v1/rooms?${title}&${selectedPage}`,
        `http://localhost:8080/api/v1/rooms?title=&page=${selectedPage}`,
        config,
      )
      .then((response) => {
        const { data } = response;
        const getRoomList = data.roomSearchDtoList;

        // Recoil 상태 업데이트
        if (getRoomList.length > 0) {
          setRoomList(getRoomList);
          console.log("룸리스트도 부르나?");
        }
      })
      .catch((error) => {
        console.error("Err:", error);
      });
  }, [token, setRoomList, selectedPage]);

  return (
    <div className="flex flex-col justify-center items-center">
      <TitleText text="방 목록" className="mt-5" />
      <SearchRoom />
      <ShowRoom />
      <div className="flex z-[50] relative bottom-10 w-[80%] items-center justify-center">
        <PageMove />
      </div>
      <ButtomButton />
    </div>
  );
}
export default RoomList;
