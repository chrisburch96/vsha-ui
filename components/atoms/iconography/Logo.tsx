import { FC } from "react";

import styled from "styled-components";

import { Title } from "components/atoms";
import { FlexContainer } from "components/templates";

const LogoContainer = styled(FlexContainer)`
  border-radius: 45%;
  height: 50px;
  width: 120px;
`;

export const Logo: FC = () => {
  return (
    <LogoContainer center>
      <Title>VSHA</Title>
    </LogoContainer>
  );
};
