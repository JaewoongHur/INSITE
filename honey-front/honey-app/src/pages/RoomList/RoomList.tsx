import Modal from "@components/common/modal/Modal";
import { useState } from "react";
import TextButton from "@components/common/button/TextButton";

function RoomList() {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <>
      <div>
        방 목록
        <TextButton
          text="모달버튼"
          fontColor="1"
          className=""
          onClick={() => setOpen((p) => !p)}
        />
      </div>
      <Modal openModal={open} position="fixed" posX="0" posY="0" center>
        모달
      </Modal>
    </>
  );
}
export default RoomList;
