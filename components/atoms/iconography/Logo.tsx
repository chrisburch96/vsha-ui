import { FC } from "react";

import styled from "styled-components";

import { Title } from "components/atoms";
import { FlexContainer } from "components/templates";

const LogoContainer = styled(FlexContainer)`
  height: 50px;
  width: 120px;
`;

interface ILogoProps {
  inverted?: boolean;
}

export const Logo: FC<ILogoProps> = ({ inverted }) => {
  return (
    <LogoContainer center>
      <Title inverted={inverted}>VSHA</Title>
    </LogoContainer>
  );
};
