import { storiesOf } from "@storybook/react";

import { Caption, Heading, Subheading, Text, Title } from "components/atoms";

const text = "Blood starts to crystallise the fragile wings of butterflies";

storiesOf("Atoms/Typography", module)
  .add("Title", () => <Title>{text}</Title>)
  .add("Heading", () => <Heading>{text}</Heading>)
  .add("Subheading", () => <Subheading>{text}</Subheading>)
  .add("Text", () => <Text>{text}</Text>)
  .add("Caption", () => <Caption>{text}</Caption>);
