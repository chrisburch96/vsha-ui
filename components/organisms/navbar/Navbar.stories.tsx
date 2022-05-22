import { storiesOf } from "@storybook/react";

import { CompactHeader, Navbar } from "components/organisms";

storiesOf("Organisms/Navbar", module)
  .add("CompactHeader", () => <CompactHeader />)
  .add("Navbar", () => <Navbar />);
