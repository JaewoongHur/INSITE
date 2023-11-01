import styled from "styled-components";
import { ReactNode } from "react";

interface DefaultBoxProps {
  children: ReactNode;
}

const BoxOutLine = styled.div`
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background-color: black;
`;

function DefaultBox({ children }: DefaultBoxProps) {
  return <BoxOutLine>{children}</BoxOutLine>;
}

export default DefaultBox;
