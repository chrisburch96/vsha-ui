import { FC } from "react";

import styled from "styled-components";

import { NavLink, Row } from "components/atoms";

const NavigationPanelContainer = styled(Row)`
  width: 300px;
`;

export const NavigationPanel: FC = () => (
  <NavigationPanelContainer>
    <NavLink href="/" text="Home" />
    <NavLink href="/music" text="Music" />
    <NavLink href="/news" text="News" />
    <NavLink href="/store" text="Store" />
  </NavigationPanelContainer>
);
