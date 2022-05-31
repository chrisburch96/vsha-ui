import { FC } from "react";

import { NavLink } from "components/atoms";
import { Size } from "components/styles";
import { FlexContainer } from "components/templates";

interface INavigationGroupProps {
  inverted?: boolean;
}

export const NavigationGroup: FC<INavigationGroupProps> = ({ inverted }) => (
  <FlexContainer center columnGap={Size.Small}>
    <NavLink href="/" inverted={inverted}>
      Home
    </NavLink>
    <NavLink href="/music" inverted={inverted}>
      Music
    </NavLink>
    <NavLink href="/news" inverted={inverted}>
      News
    </NavLink>
    <NavLink href="/store" inverted={inverted}>
      Store
    </NavLink>
  </FlexContainer>
);
