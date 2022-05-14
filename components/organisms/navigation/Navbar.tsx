import { FC } from "react";

import styled from "styled-components";

import { Row } from "components/atoms";
import { NavigationPanel, SocialsPanel } from "components/molecules";

const NavbarContainer = styled(Row)`
  background-color: ${(props) => props.theme.colors.neutral[900]};
  padding: ${(props) => props.theme.spacing.m};
`;

export const Navbar: FC = () => {
  return (
    <NavbarContainer>
      <NavigationPanel />
      <SocialsPanel />
    </NavbarContainer>
  );
};
