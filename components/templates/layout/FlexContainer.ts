import styled from "styled-components";

import { Pixel, Size } from "components/styles";

interface IFlexContainerProps {
  // background-color
  backgroundColor?: string;

  // align-content
  contentCenter?: boolean;
  contentEnd?: boolean;
  contentSpaceAround?: boolean;
  contentSpaceBetween?: boolean;
  contentStart?: boolean;
  contentStretch?: boolean; // default

  // align-items
  alignBaseline?: boolean;
  alignCenter?: boolean;
  alignEnd?: boolean;
  alignStart?: boolean;
  alignStretch?: boolean;

  // column-gap
  columnGap?: Size;

  // display
  inline?: boolean;

  // flex-direction
  column?: boolean;
  columnReverse?: boolean;
  row?: boolean; // default
  rowReverse?: boolean;

  // flex-wrap
  noWrap?: boolean; // default
  wrap?: boolean;
  wrapReverse?: boolean;

  // height
  height?: number;

  // justify-content
  justifyCenter?: boolean;
  justifyEnd?: boolean;
  justifySpaceAround?: boolean;
  justifySpaceBetween?: boolean;
  justifySpaceEvenly?: boolean;
  justifyStart?: boolean; // default

  // row-gap
  rowGap?: Size;

  // width
  width?: number;

  // utilities
  center?: boolean; // sets justify-content and align-items to center
  full?: boolean;
}

export const FlexContainer = styled.div<IFlexContainerProps>`
  align-content: ${({
    contentCenter,
    contentEnd,
    contentStart,
    contentSpaceAround,
    contentSpaceBetween,
    contentStretch,
  }) => {
    if (contentCenter) {
      return "center";
    } else if (contentEnd) {
      return "flex-end";
    } else if (contentStart) {
      return "flex-start";
    } else if (contentSpaceAround) {
      return "space-around";
    } else if (contentSpaceBetween) {
      return "space-between";
    } else if (contentStretch) {
      return "stretch";
    } else {
      return "stretch"; // default;
    }
  }};
  align-items: ${({
    alignBaseline,
    alignCenter,
    alignEnd,
    alignStart,
    alignStretch,
    center,
  }) => {
    if (center) {
      return "center"; // highest priority utility flag
    } else if (alignBaseline) {
      return "baseline";
    } else if (alignCenter) {
      return "center";
    } else if (alignEnd) {
      return "flex-end";
    } else if (alignStart) {
      return "flex-start";
    } else if (alignStretch) {
      return "stretch";
    }
  }};
  background-color: ${({ backgroundColor }) => backgroundColor};
  column-gap: ${({ columnGap, theme }) =>
    columnGap && theme.spacing[columnGap]};
  display: ${({ inline }) => (inline ? "inline-flex" : "flex")};
  flex-basis: ${({ full }) => full && "100%"};
  flex-direction: ${({ column, columnReverse, row, rowReverse }) => {
    if (column) {
      return "column";
    } else if (columnReverse) {
      return "column-reverse";
    } else if (row) {
      return "row";
    } else if (rowReverse) {
      return "row-reverse";
    } else {
      return "row"; // default
    }
  }};
  flex-wrap: ${({ noWrap, wrap, wrapReverse }) => {
    if (noWrap) {
      return "nowrap";
    } else if (wrap) {
      return "wrap";
    } else if (wrapReverse) {
      return "wrap-reverse";
    } else {
      return "nowrap"; // default
    }
  }};
  height: ${({ full, height }) => Pixel(height) ?? (full && "100%")};
  justify-content: ${({
    center,
    justifyCenter,
    justifyEnd,
    justifySpaceAround,
    justifySpaceBetween,
    justifySpaceEvenly,
    justifyStart,
  }) => {
    if (center) {
      return "center"; // highest priority utility flag
    } else if (justifyCenter) {
      return "center";
    } else if (justifyEnd) {
      return "flex-end";
    } else if (justifySpaceAround) {
      return "space-around";
    } else if (justifySpaceBetween) {
      return "space-between";
    } else if (justifySpaceEvenly) {
      return "space-evenly";
    } else if (justifyStart) {
      return "flex-start";
    } else {
      return "flex-start"; // default
    }
  }};
  row-gap: ${({ rowGap, theme }) => rowGap && theme.spacing[rowGap]};
  width: ${({ full, width }) => Pixel(width) ?? (full && "100%")};
`;
