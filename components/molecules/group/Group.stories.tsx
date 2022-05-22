import { storiesOf } from "@storybook/react";

import { NavigationGroup, SocialsGroup } from "components/molecules";

storiesOf("Molecules/Group", module)
  .add("NavigationGroup", () => (
    <div style={{ width: "300px" }}>
      <NavigationGroup />
    </div>
  ))
  .add("SocialsGroup", () => (
    <div style={{ width: "150px" }}>
      <SocialsGroup />
    </div>
  ));
