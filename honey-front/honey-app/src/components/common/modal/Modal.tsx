import { PropsWithChildren, useEffect, useState } from "react";

interface ModalType {
  // width: string;
  // height: string;
  openModal: boolean;
  posX: string;
  posY: string;
  center: boolean;
  position: "absolute" | "fixed";
}

function Modal({
  openModal,
  children,
  // width,
  // height,
  posX,
  posY,
  center,
  position,
}: PropsWithChildren<ModalType>) {
  const [visible, setVisible] = useState<boolean>(false);
  const modalClasses = `
    ${visible ? "" : "hidden"}
    w-96 h-96
    ${
      center
        ? "bottom-1/2 left-1/2"
        : `bottom-1/2 left-1/2 transform -translate-x-${posX} -translate-y-${posY}`
    }
    ${position}
    border-0 rounded-lg bg-white shadow-lg
  `;
  useEffect(() => {
    if (openModal) {
      setTimeout(() => {
        setVisible(true);
      }, 115);
    } else {
      setVisible(false);
    }
  }, [openModal]);
  return visible && <div className={modalClasses}>{children}</div>;
}
// ----------------------------------------------------------------------------------------------------

/* Export */
export default Modal;
