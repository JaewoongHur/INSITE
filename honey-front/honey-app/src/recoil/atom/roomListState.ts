import { atom } from "recoil";
import type { RoomTypes } from "@/types/dataTypes";

const initialRooms: RoomTypes[] = [
  {
    roomId: 1,
    roomName: "Room 1",
    maker: "User 1",
    isOpen: true,
  },
  {
    roomId: 2,
    roomName: "Room 2",
    maker: "User 2",
    isOpen: false,
  },
  {
    roomId: 3,
    roomName: "Room 3",
    maker: "User 3",
    isOpen: true,
  },
];

const roomListState = atom<RoomTypes[]>({
  key: "roomAtoms",
  default: initialRooms,
});

export default roomListState;
