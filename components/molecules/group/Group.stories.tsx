import { storiesOf } from "@storybook/react";

import { NavigationGroup } from "./NavigationGroup";
import { SocialsGroup } from "./SocialsGroup";

storiesOf("Molecules/Group", module)
  .add("NavigationGroup", () => <NavigationGroup />)
  .add("SocialsGroup", () => <SocialsGroup />);
