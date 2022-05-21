import { FC } from "react";

import styled from "styled-components";

import {
  FacebookIcon,
  InstagramIcon,
  Row,
  SpotifyIcon,
  TikTokIcon,
  TwitterIcon,
  YoutubeIcon,
} from "components/atoms";

const SocialsGroupContainer = styled(Row)`
  width: 150px;
`;

export const SocialsGroup: FC = () => (
  <SocialsGroupContainer>
    <FacebookIcon />
    <InstagramIcon />
    <SpotifyIcon />
    <TikTokIcon />
    <TwitterIcon />
    <YoutubeIcon />
  </SocialsGroupContainer>
);
