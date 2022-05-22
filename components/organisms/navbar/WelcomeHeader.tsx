import { FC } from "react";

import styled from "styled-components";

import { NavigationGroup, SocialsGroup } from "components/molecules";
import { FlexContainer } from "components/templates";

const WelcomeHeaderContainer = styled(FlexContainer)`
  background-color: ${(props) => props.theme.colors.neutral[900]};
  padding: ${(props) => props.theme.spacing.m};
`;

export const WelcomeHeader: FC = () => {
  return (
    <WelcomeHeaderContainer>
      <NavigationGroup />
      <SocialsGroup />
    </WelcomeHeaderContainer>
  );
};
