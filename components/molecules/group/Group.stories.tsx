import { storiesOf } from "@storybook/react";

import { NavigationGroup, SocialsGroup } from "components/molecules";

storiesOf("Molecules/Group", module)
  .add("NavigationGroup", () => <NavigationGroup />)
  .add("SocialsGroup", () => <SocialsGroup />);
