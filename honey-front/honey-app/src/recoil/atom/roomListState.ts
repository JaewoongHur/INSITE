import { RoomType } from "@customtype/dataTypes";
import { atom } from "recoil";

const dummyRoom1: RoomType[] = [
  {
    roomId: 1,
    roomName: "동이 방",
    owner: "동현김",
    isOpen: true,
  },
  {
    roomId: 2,
    roomName: "현이 안방",
    owner: "김동현",
    isOpen: false,
  },
  {
    roomId: 3,
    roomName: "현현이 옆방dddddddddddddddd",
    owner: "현동김",
    isOpen: true,
  },
  {
    roomId: 4,
    roomName: "현현이 옆방",
    owner: "현동김",
    isOpen: true,
  },
  {
    roomId: 5,
    roomName: "현현이 옆방",
    owner: "현동김",
    isOpen: true,
  },
];

const roomListState = atom<RoomType[]>({
  key: "roomAtoms",
  default: dummyRoom1,
});

export default roomListState;
