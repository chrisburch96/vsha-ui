import styled from "styled-components";

export const Button = styled.button`
  background-color: ${(props) => props.theme.colors.neutral[900]};
  border: ${(props) => `2px solid ${props.theme.colors.primaryBlue[110]}`};
  border-radius: 3px;
  color: ${(props) => props.theme.colors.primaryBlue[100]};
  font-family: ${(props) => props.theme.typography.body.fontFamily};
  font-size: ${(props) => props.theme.typography.body.fontSize};
  margin: 1em;
  padding: 0.25em 1em;
`;
