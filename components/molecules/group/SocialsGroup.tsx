import { FC } from "react";

import {
  FacebookIcon,
  InstagramIcon,
  SpotifyIcon,
  TikTokIcon,
  TwitterIcon,
  YoutubeIcon,
} from "components/atoms";
import { Size } from "components/styles";
import { FlexContainer } from "components/templates";

interface ISocialsGroupProps {
  inverted?: boolean;
}

export const SocialsGroup: FC<ISocialsGroupProps> = ({ inverted }) => (
  <FlexContainer center columnGap={Size.Small}>
    <FacebookIcon inverted={inverted} />
    <InstagramIcon inverted={inverted} />
    <SpotifyIcon inverted={inverted} />
    <TikTokIcon inverted={inverted} />
    <TwitterIcon inverted={inverted} />
    <YoutubeIcon inverted={inverted} />
  </FlexContainer>
);
