import { FC } from "react";

import styled from "styled-components";

import { Logo } from "components/atoms";
import { NavigationGroup, SocialsGroup } from "components/molecules";
import { FlexContainer, FlexItem } from "components/templates";

const CompactHeaderContainer = styled(FlexContainer)`
  background-color: ${({ theme }) => theme.palette.neutral[100]};
  border-radius: 5px;
`;

export const CompactHeader: FC = () => {
  return (
    <CompactHeaderContainer alignCenter height={56}>
      <FlexItem grow={1}>
        <NavigationGroup />
      </FlexItem>
      <FlexItem grow={8}>
        <FlexContainer center>
          <Logo />
        </FlexContainer>
      </FlexItem>
      <FlexItem grow={1}>
        <SocialsGroup />
      </FlexItem>
    </CompactHeaderContainer>
  );
};
