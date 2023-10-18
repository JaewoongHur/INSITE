import { atom } from "recoil";

const roomState = atom<string>({
  key: "roomState",
  default: "",
});

export default roomState;
