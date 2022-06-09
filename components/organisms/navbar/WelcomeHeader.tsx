import { FC } from "react";

import styled from "styled-components";

import { Divider, WelcomeLogo } from "components/atoms";
import { NavigationGroup, SocialsGroup } from "components/molecules";
import { Size } from "components/styles";
import { FlexContainer, FlexItem } from "components/templates";

const WelcomeHeaderContainer = styled(FlexContainer)`
  height: 70vh;
`;

interface IWelcomeHeaderProps {
  inverted?: boolean;
}

export const WelcomeHeader: FC<IWelcomeHeaderProps> = ({ inverted }) => {
  return (
    <WelcomeHeaderContainer center column>
      <FlexItem grow={4}>
        <FlexContainer center full>
          <WelcomeLogo inverted={inverted} />
        </FlexContainer>
      </FlexItem>
      <FlexItem grow={1}>
        <FlexContainer
          alignCenter
          columnGap={Size.Medium}
          full
          justifySpaceBetween
        >
          <NavigationGroup inverted={inverted} />
          <Divider inverted={inverted} vertical />
          <SocialsGroup inverted={inverted} />
        </FlexContainer>
      </FlexItem>
    </WelcomeHeaderContainer>
  );
};
