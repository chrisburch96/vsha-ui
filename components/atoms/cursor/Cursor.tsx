import styled from "styled-components";

import { Pixel } from "components/styles";
import { IMousePosition, useMousePosition } from "hooks";

export const Cursor = styled.div.attrs<IMousePosition>(({ x, y }) => ({
  style: {
    left: Pixel(x),
    top: Pixel(y),
  },
}))<IMousePosition>`
  background-color: ${({ theme }) => theme.palette.neutral[100]};
  border-radius: 50%;
  display: ${({ x, y }) => (!x || !y) && "none"};
  height: 8px;
  pointer-events: none;
  position: fixed;
  width: 8px;
  z-index: 1;
`;

export const CustomCursor = () => {
  const position = useMousePosition();
  return <Cursor {...position}></Cursor>;
};
