import styled from "styled-components";

export const TextButton = styled.button`
  background-color: transparent;
  border: none;
  color: ${({ theme }) => theme.palette.neutral[900]};
  font-family: ${({ theme }) => theme.typography.button.fontFamily};
  font-size: ${({ theme }) => theme.typography.button.fontSize};
  font-weight: ${({ theme }) => theme.typography.button.fontWeight};
  line-height: ${({ theme }) => theme.typography.button.lineHeight};
  text-transform: uppercase;
`;
