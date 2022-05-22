import { FC } from "react";

import { NavLink } from "components/atoms";
import { FlexContainer } from "components/templates";

export const NavigationGroup: FC = () => (
  <FlexContainer center columnGap="s">
    <NavLink href="/">Home</NavLink>
    <NavLink href="/music">Music</NavLink>
    <NavLink href="/news">News</NavLink>
    <NavLink href="/store">Store</NavLink>
  </FlexContainer>
);
