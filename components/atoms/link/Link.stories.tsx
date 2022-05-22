import { storiesOf } from "@storybook/react";

import { NavLink } from "components/atoms";

storiesOf("Atoms/Link", module).add("NavLink", () => (
  <NavLink href="/">Link</NavLink>
));
