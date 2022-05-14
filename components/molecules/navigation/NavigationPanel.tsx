import { FC } from "react";

import styled from "styled-components";

import { NavLink, Row } from "components/atoms";

const NavigationPanelContainer = styled(Row)`
  width: 300px;
`;

export const NavigationPanel: FC = () => (
  <NavigationPanelContainer>
    <NavLink href="/">Home</NavLink>
    <NavLink href="/music">Music</NavLink>
    <NavLink href="/news">News</NavLink>
    <NavLink href="/store">Store</NavLink>
  </NavigationPanelContainer>
);
