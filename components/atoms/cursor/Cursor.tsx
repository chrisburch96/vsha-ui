import styled from "styled-components";

import { Pixel } from "components/styles";
import { useMouseDown, useMousePosition } from "hooks";

interface ICursorProps {
  mouseDown: boolean;
  x: number | null;
  y: number | null;
}

export const Cursor = styled.div.attrs<ICursorProps>(({ x, y }) => ({
  style: {
    left: Pixel(x),
    top: Pixel(y),
  },
}))<ICursorProps>`
  background-color: ${({ mouseDown, theme }) =>
    mouseDown ? theme.palette.secondary[100] : theme.palette.neutral[100]};
  border-radius: 50%;
  display: ${({ x, y }) => (!x || !y) && "none"};
  height: 8px;
  pointer-events: none;
  position: fixed;
  width: 8px;
  z-index: 1;
`;

export const CustomCursor = () => {
  const mouseDown = useMouseDown();
  const mousePosition = useMousePosition();
  return <Cursor mouseDown={mouseDown} {...mousePosition}></Cursor>;
};
