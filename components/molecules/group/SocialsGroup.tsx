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
  <FlexContainer center columnGap="s">
    <FacebookIcon />
    <InstagramIcon />
    <SpotifyIcon />
    <TikTokIcon />
    <TwitterIcon />
    <YoutubeIcon />
  </FlexContainer>
);
