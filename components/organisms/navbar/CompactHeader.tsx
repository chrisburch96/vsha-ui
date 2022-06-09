import { FC } from "react";

import styled from "styled-components";

import { CompactLogo } from "components/atoms";
import { NavigationGroup, SocialsGroup } from "components/molecules";
import { FlexContainer, FlexItem } from "components/templates";

interface ICompactHeaderProps {
  inverted?: boolean;
}

const CompactHeaderContainer = styled(FlexContainer)<ICompactHeaderProps>`
  background-color: ${({ inverted, theme }) =>
    theme.palette.neutral[inverted ? 900 : 100]};
  border-radius: 5px;
`;

export const CompactHeader: FC<ICompactHeaderProps> = ({ inverted }) => {
  return (
    <CompactHeaderContainer alignCenter height={56} inverted={inverted}>
      <FlexItem grow={1}>
        <NavigationGroup inverted={inverted} />
      </FlexItem>
      <FlexItem grow={8}>
        <FlexContainer center>
          <CompactLogo inverted={inverted} />
        </FlexContainer>
      </FlexItem>
      <FlexItem grow={1}>
        <SocialsGroup inverted={inverted} />
      </FlexItem>
    </CompactHeaderContainer>
  );
};
