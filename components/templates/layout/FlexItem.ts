import styled from "styled-components";

interface IFlexItemProps {
  // flex-basis
  basis?: number;

  // flex-grow
  grow?: number;

  // flex-shrink
  noShrink?: boolean;
  shrink?: number;

  // order
  order?: number;
}

export const FlexItem = styled.div<IFlexItemProps>`
  flex-basis: ${({ basis }) => basis || "auto"};
  flex-grow: ${({ grow }) => grow || 0};
  flex-shrink: ${({ noShrink, shrink }) => (noShrink ? 0 : shrink || 1)};
  order: ${({ order }) => order || 0};
`;
