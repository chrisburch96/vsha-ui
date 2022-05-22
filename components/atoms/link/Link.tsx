import { FC, ReactNode } from "react";

import Link from "next/link";
import styled from "styled-components";

interface IStyledLinkProps {
  inverted?: boolean;
}

const StyledLink = styled.a<IStyledLinkProps>`
  color: ${({ inverted, theme }) => theme.colors.neutral[inverted ? 100 : 900]};
  font-family: ${({ theme }) => theme.typography.button.fontFamily};
  font-size: ${({ theme }) => theme.typography.button.fontSize};
  font-weight: ${({ theme }) => theme.typography.button.fontWeight};
  line-height: ${({ theme }) => theme.typography.button.lineHeight};
  text-decoration: none;
  text-transform: uppercase;
  &:hover {
    color: ${({ theme }) => theme.colors.primaryBlue[100]};
  }
  &:focus {
    text-decoration: underline;
  }
  &:active {
    color: ${({ theme }) => theme.colors.primaryBlue[110]};
  }
`;

interface INavLinkProps {
  children?: ReactNode;
  href: string;
  inverted?: boolean;
}

export const NavLink: FC<INavLinkProps> = ({ children, href, inverted }) => (
  <Link href={href} passHref>
    <StyledLink inverted={inverted}>{children}</StyledLink>
  </Link>
);
