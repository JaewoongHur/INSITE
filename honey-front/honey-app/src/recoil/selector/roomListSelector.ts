import roomListState from "@recoil/atom/roomListState";
import roomState from "@recoil/atom/roomState";
import { selector } from "recoil";

const roomListSelector = selector({
  key: "filteredRoomList",
  get: ({ get }) => {
    const inputSearch = get(roomState); // inputSearchState에서 검색어 가져옴
    const roomList = get(roomListState); // roomAtoms에서 전체 방 목록 가져옴

    // inputSearch를 사용하여 방 목록을 필터링
    return roomList.filter((room) => room.roomName.includes(inputSearch));
  },
});

export default roomListSelector;
