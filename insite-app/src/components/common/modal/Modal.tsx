import { PropsWithChildren, useEffect, useState } from "react";
import styled from "styled-components";

interface ModalType {
  width: string;
  height: string;
  openModal: boolean;
  posX: string;
  posY: string;
  position: "absolute" | "fixed";
}

// ----------------------------------------------------------------------------------------------------

/* Style */
const ModalContent = styled.div<ModalType>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  transform: translate(-50%, 50%)
    ${(props) => (props.posX ? `translateX(${props.posX})` : "")}${(props) => (props.posY ? `translateY(${props.posY})` : "")};
  display: flex;
  flex-direction: column;
  align-items: center;
  position: ${(props) => props.position};
  border: none;
  border-radius: 20px;
  background-color: white;
  box-shadow: 0 0 30px rgba(30, 30, 30, 0.185);
  box-sizing: border-box;
  z-index: 10000;
`;

// ----------------------------------------------------------------------------------------------------

function Modal({
  openModal,
  children,
  width,
  height,
  posX,
  posY,
  position,
}: PropsWithChildren<ModalType>) {
  const [visible, setVisible] = useState<boolean>(false);

  useEffect(() => {
    if (openModal) {
      setTimeout(() => {
        setVisible(true);
      }, 115);
    } else {
      setVisible(false);
    }
  }, [openModal]);
  return (
    visible && (
      <ModalContent
        width={width}
        height={height}
        openModal={openModal}
        posX={posX}
        posY={posY}
        position={position}
      >
        {children}
      </ModalContent>
    )
  );
}
// ----------------------------------------------------------------------------------------------------

/* Export */
export default Modal;
