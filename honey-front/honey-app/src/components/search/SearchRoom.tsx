import { ImageButton } from "@components/common/button";
import { TextInput } from "@components/common/input";
import { searchImg } from "@assets/images";
import { useRecoilState } from "recoil";
import {
  inputSearchState,
  roomListState,
  selectedPageState,
} from "@recoil/atom";
import { PageType, RoomType } from "@customtype/dataTypes";
import axios from "axios";
import { useState, useEffect } from "react";

function SearchRoom() {
  const imgAddress: string = searchImg;
  const [title, setTitle] = useRecoilState<string>(inputSearchState);
  const [, setRoomList] = useRecoilState<RoomType[]>(roomListState);
  const token = sessionStorage.getItem("Authorization");
  const [selectedPage, setSelectedPage] =
    useRecoilState<PageType>(selectedPageState);
  const [beforeSearch, setBeforeSearch] = useState<string>("");
  const { VITE_API_URL } = import.meta.env;

  useEffect(() => {
    const config = {
      headers: {
        Authorization: token,
      },
    };

    axios
      .get(
        `${VITE_API_URL}/api/v1/rooms?title=${title}&page=${selectedPage.currentPage}`,
        config,
      )
      .then((response) => {
        const { data } = response;
        const getRoomList = data.roomSearchDtoList;

        // Recoil 상태 업데이트
        if (getRoomList.length > 0) {
          setRoomList(getRoomList);
        } else {
          setRoomList([]);
        }
      });
    // .catch((error) => {
    //   console.error("Err:", error);
    // });
  }, [selectedPage, setRoomList, title, token, VITE_API_URL]);

  const searchRoom = () => {
    const resetPage: PageType = {
      currentPage: 0,
      hasNext: true,
      totalPages: 1,
    };

    setSelectedPage(resetPage);
    setTitle(beforeSearch);
    setBeforeSearch("");
  };

  return (
    <div className="flex w-full h-[70px] items-center justify-center relative z-[50] top-6 ">
      <div className="flex w-[70%] justify-end">
        <TextInput
          value={beforeSearch}
          holder="방을 검색하세요"
          readonly={false}
          className="h-12 w-full m-5 p-1"
          onChange={(e) => setBeforeSearch(e.target.value)}
          onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) =>
            e.key === "Enter" && searchRoom()
          }
        />
      </div>
      <ImageButton
        image={imgAddress}
        alt="검색"
        className="flex items-center justify-start w-[10%] mr-5"
        onClick={searchRoom}
      />
    </div>
  );
}
export default SearchRoom;
