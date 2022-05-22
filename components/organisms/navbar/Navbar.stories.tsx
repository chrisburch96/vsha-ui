import { storiesOf } from "@storybook/react";

import { CompactHeader, Navbar, WelcomeHeader } from "components/organisms";

storiesOf("Organisms/Navbar", module)
  .add("CompactHeader", () => <CompactHeader />)
  .add("Navbar", () => <Navbar />)
  .add("WelcomeHeader", () => <WelcomeHeader />);
