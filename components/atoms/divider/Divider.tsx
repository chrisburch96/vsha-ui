import styled from "styled-components";

interface IDividerProps {
  thickness?: "xxs" | "xs" | "s" | "m" | "l" | "xl";
  vertical?: boolean;
}

export const Divider = styled.div<IDividerProps>`
  background-color: ${({ theme }) => theme.colors.neutral[900]};
  height: ${({ thickness, theme, vertical }) => {
    if (vertical) {
      return "100%";
    } else {
      return theme.spacing[thickness || "xs"];
    }
  }};
  width: ${({ thickness, theme, vertical }) => {
    if (vertical) {
      return theme.spacing[thickness || "xs"];
    } else {
      return "100%";
    }
  }};
`;
