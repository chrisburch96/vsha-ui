import { FC } from "react";

import {
  FacebookIcon,
  InstagramIcon,
  SpotifyIcon,
  TikTokIcon,
  TwitterIcon,
  YoutubeIcon,
} from "components/atoms";
import { FlexContainer } from "components/templates";

export const SocialsGroup: FC = () => (
  <FlexContainer justifySpaceAround>
    <FacebookIcon />
    <InstagramIcon />
    <SpotifyIcon />
    <TikTokIcon />
    <TwitterIcon />
    <YoutubeIcon />
  </FlexContainer>
);
