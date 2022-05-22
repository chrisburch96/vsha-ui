import { FC } from "react";

import styled from "styled-components";

import { Row } from "components/atoms";
import { NavigationGroup, SocialsGroup } from "components/molecules";

const CompactHeaderContainer = styled(Row)`
  background-color: ${(props) => props.theme.colors.neutral[900]};
  padding: ${(props) => props.theme.spacing.m};
`;

export const CompactHeader: FC = () => {
  return (
    <CompactHeaderContainer>
      <NavigationGroup />
      <SocialsGroup />
    </CompactHeaderContainer>
  );
};
