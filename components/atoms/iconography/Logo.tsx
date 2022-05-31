import { FC } from "react";

import { Title } from "components/atoms";
import { FlexContainer } from "components/templates";

interface ILogoProps {
  inverted?: boolean;
}

export const Logo: FC<ILogoProps> = ({ inverted }) => {
  return (
    <FlexContainer center height={50} width={120}>
      <Title inverted={inverted}>VSHA</Title>
    </FlexContainer>
  );
};
