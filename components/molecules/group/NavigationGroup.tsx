import { FC } from "react";

import styled from "styled-components";

import { NavLink, Row } from "components/atoms";

const NavigationGroupContainer = styled(Row)`
  width: 300px;
`;

export const NavigationGroup: FC = () => (
  <NavigationGroupContainer>
    <NavLink href="/">Home</NavLink>
    <NavLink href="/music">Music</NavLink>
    <NavLink href="/news">News</NavLink>
    <NavLink href="/store">Store</NavLink>
  </NavigationGroupContainer>
);
