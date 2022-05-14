import { storiesOf } from "@storybook/react";

import { NavLink } from "./Link";

storiesOf("Atoms/Link", module).add("NavLink", () => (
  <NavLink href="/">Link</NavLink>
));
