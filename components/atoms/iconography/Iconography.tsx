import { FC } from "react";

import {
  faFacebook,
  faInstagram,
  faSpotify,
  faTiktok,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

const facebookUrl = "https://www.facebook.com/vshaofficial";
const instagramUrl = "https://www.instagram.com/vshaofficial";
const twitterUrl = "https://www.twitter.com/vshaofficial";

interface IStyledIconProps {
  inverted?: boolean;
}

const StyledIcon = styled(FontAwesomeIcon)<IStyledIconProps>`
  color: ${({ inverted, theme }) =>
    theme.palette.neutral[inverted ? 100 : 900]};
  font-size: ${({ theme }) => theme.typography.caption.fontSize};
  &:hover,
  :focus {
    color: ${({ theme }) => theme.palette.primary[100]};
  }
  &:active {
    color: ${({ theme }) => theme.palette.primary[110]};
  }
`;

interface IIconProps {
  inverted?: boolean;
}

export const FacebookIcon: FC<IIconProps> = ({ inverted }) => (
  <a href={facebookUrl} rel="noreferrer" target="_blank">
    <StyledIcon icon={faFacebook} inverted={inverted} />
  </a>
);

export const InstagramIcon: FC<IIconProps> = ({ inverted }) => (
  <a href={instagramUrl} rel="noreferrer" target="_blank">
    <StyledIcon icon={faInstagram} inverted={inverted} />
  </a>
);

export const SpotifyIcon: FC<IIconProps> = ({ inverted }) => (
  <StyledIcon icon={faSpotify} inverted={inverted} />
);

export const TikTokIcon: FC<IIconProps> = ({ inverted }) => (
  <StyledIcon icon={faTiktok} inverted={inverted} />
);

export const TwitterIcon: FC<IIconProps> = ({ inverted }) => (
  <a href={twitterUrl} rel="noreferrer" target="_blank">
    <StyledIcon icon={faTwitter} inverted={inverted} />
  </a>
);

export const YoutubeIcon: FC<IIconProps> = ({ inverted }) => (
  <StyledIcon icon={faYoutube} inverted={inverted} />
);
