import { FC } from "react";

import Link from "next/link";
import styled from "styled-components";

const StyledLink = styled.a`
  color: ${(props) => props.theme.colors.neutral[100]};
  font-family: ${(props) => props.theme.typography.button.fontFamily};
  font-size: ${(props) => props.theme.typography.button.fontSize};
  font-weight: ${(props) => props.theme.typography.button.fontWeight};
  line-height: ${(props) => props.theme.typography.button.lineHeight};
  text-decoration: none;
  text-transform: uppercase;
  &:hover {
    color: ${(props) => props.theme.colors.primaryBlue[100]};
  }
  &:focus {
    text-decoration: underline;
  }
  &:active {
    color: ${(props) => props.theme.colors.primaryBlue[110]};
  }
`;

interface INavLinkProps {
  href: string;
  text: string;
}

export const NavLink: FC<INavLinkProps> = ({ href, text }) => (
  <Link href={href} passHref>
    <StyledLink>{text}</StyledLink>
  </Link>
);
