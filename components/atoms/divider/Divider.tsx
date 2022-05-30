import styled from "styled-components";
import { Size } from "components/styles";

const defaultThickness = Size.Small;

interface IDividerProps {
  inverted?: boolean;
  thickness?: Size;
  vertical?: boolean;
}

export const Divider = styled.div<IDividerProps>`
  background-color: ${({ inverted, theme }) =>
    theme.palette.neutral[inverted ? 100 : 900]};
  height: ${({ thickness, theme, vertical }) => {
    if (vertical) {
      return "100%";
    } else {
      return theme.spacing[thickness || defaultThickness];
    }
  }};
  width: ${({ thickness, theme, vertical }) => {
    if (vertical) {
      return theme.spacing[thickness || defaultThickness];
    } else {
      return "100%";
    }
  }};
`;
