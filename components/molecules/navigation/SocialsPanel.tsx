import { FC } from "react";

import styled from "styled-components";

import {
  FacebookIcon,
  InstagramIcon,
  Row,
  TikTokIcon,
  TwitterIcon,
  YoutubeIcon,
} from "components/atoms";

const SocialsPanelContainer = styled(Row)`
  width: 150px;
`;

export const SocialsPanel: FC = () => (
  <SocialsPanelContainer>
    <FacebookIcon />
    <InstagramIcon />
    <TikTokIcon />
    <TwitterIcon />
    <YoutubeIcon />
  </SocialsPanelContainer>
);
