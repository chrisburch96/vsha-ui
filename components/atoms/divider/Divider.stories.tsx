import { storiesOf } from "@storybook/react";

import { Divider } from "components/atoms";
import { FlexContainer } from "components/templates";

storiesOf("Atoms/Divider", module)
  .add("Horizontal", () => (
    <div style={{ width: "300px" }}>
      <FlexContainer column rowGap="m" full>
        <Divider thickness="xxs" />
        <Divider thickness="xs" />
        <Divider thickness="s" />
        <Divider thickness="m" />
        <Divider thickness="l" />
        <Divider thickness="xl" />
      </FlexContainer>
    </div>
  ))
  .add("Vertical", () => (
    <div style={{ height: "300px" }}>
      <FlexContainer columnGap="m" full>
        <Divider thickness="xxs" vertical />
        <Divider thickness="xs" vertical />
        <Divider thickness="s" vertical />
        <Divider thickness="m" vertical />
        <Divider thickness="l" vertical />
        <Divider thickness="xl" vertical />
      </FlexContainer>
    </div>
  ));
