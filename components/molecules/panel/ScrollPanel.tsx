import { FC } from "react";

import styled from "styled-components";

import { ChevronDownIcon } from "components/atoms";
import { FlexContainer } from "components/templates";

const ScrollPanelContainer = styled(FlexContainer)`
  bottom: 50px;
  position: absolute;
  width: calc(100% - 20px);
`;

interface IScrollPanelProps {
  href: string;
}

export const ScrollPanel: FC<IScrollPanelProps> = ({ href }) => {
  return (
    <ScrollPanelContainer center>
      <ChevronDownIcon fontSize={30} href={href} inverted />
    </ScrollPanelContainer>
  );
};
