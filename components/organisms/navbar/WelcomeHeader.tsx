import { FC } from "react";

import styled from "styled-components";

import { Divider, Logo } from "components/atoms";
import { NavigationGroup, SocialsGroup } from "components/molecules";
import { FlexContainer, FlexItem } from "components/templates";

const WelcomeHeaderContainer = styled(FlexContainer)`
  height: 200px;
`;

export const WelcomeHeader: FC = () => {
  return (
    <WelcomeHeaderContainer center column>
      <FlexItem grow={4}>
        <FlexContainer center full>
          <Logo inverted />
        </FlexContainer>
      </FlexItem>
      <FlexItem grow={1}>
        <FlexContainer alignCenter columnGap="m" full justifySpaceBetween>
          <NavigationGroup inverted />
          <Divider inverted vertical />
          <SocialsGroup inverted />
        </FlexContainer>
      </FlexItem>
    </WelcomeHeaderContainer>
  );
};
