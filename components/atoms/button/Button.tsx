import styled from "styled-components";

export const TextButton = styled.button`
  background-color: transparent;
  border: none;
  color: ${(props) => props.theme.colors.neutral[900]};
  font-family: ${(props) => props.theme.typography.button.fontFamily};
  font-size: ${(props) => props.theme.typography.button.fontSize};
  font-weight: ${(props) => props.theme.typography.button.fontWeight};
  line-height: ${(props) => props.theme.typography.button.lineHeight};
  text-transform: uppercase;
`;
