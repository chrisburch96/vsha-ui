import { FC } from "react";

import styled from "styled-components";

import { NavigationPanel } from "components/molecules";

const NavbarContainer = styled.div`
  background-color: ${(props) => props.theme.colors.neutral[900]};
  padding: ${(props) => props.theme.spacing.m};
`;

export const Navbar: FC = () => {
  return (
    <NavbarContainer>
      <NavigationPanel />
    </NavbarContainer>
  );
};
