import styled from "styled-components";
import { ReactNode } from "react";

interface DefaultBoxProps {
  children: ReactNode;
  width: string;
  height: string;
}

const DefaultBoxStyle = styled.div<DefaultBoxProps>`
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background-color: ${(props) => props.theme.colors.b1};
`;

function DefaultBox({ children, width, height }: DefaultBoxProps) {
  return (
    <DefaultBoxStyle width={width} height={height}>
      {children}
    </DefaultBoxStyle>
  );
}

export default DefaultBox;
