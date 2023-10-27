import { atom } from "recoil";

const selectedPageState = atom<number>({
  key: "selectedPageAtom",
  default: 0,
});

export default selectedPageState;
