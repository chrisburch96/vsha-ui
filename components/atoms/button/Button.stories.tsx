import { storiesOf } from "@storybook/react";

import { TextButton } from "./Button";

storiesOf("Atoms/Button", module).add("TextButton", () => (
  <TextButton>Store</TextButton>
));
