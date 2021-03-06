import { FC } from "react";

import {
  faFacebook,
  faInstagram,
  faSpotify,
  faTiktok,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { faArrowCircleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import styled from "styled-components";

import { Pixel } from "components/styles";

const facebookUrl = "https://www.facebook.com/vshaofficial";
const instagramUrl = "https://www.instagram.com/vshaofficial";
const twitterUrl = "https://www.twitter.com/vshaofficial";
const youtubeUrl = "https://www.youtube.com/channel/UCDePwNU1sZUQZfEPNAQyI9g";

interface IStyledIconProps {
  fontSize?: number;
  $inverted?: boolean; // Transient prop to prevent conflicts with FontAwesome props.
}

const StyledIcon = styled(FontAwesomeIcon)<IStyledIconProps>`
  color: ${({ $inverted, theme }) =>
    theme.palette.neutral[$inverted ? 100 : 900]};
  font-size: ${({ fontSize, theme }) =>
    Pixel(fontSize) ?? theme.typography.caption.fontSize};
  &:hover,
  :focus {
    color: ${({ theme }) => theme.palette.primary[100]};
  }
  &:active {
    color: ${({ theme }) => theme.palette.primary[110]};
  }
`;

interface IIconProps {
  fontSize?: number;
  href?: string;
  inverted?: boolean;
}

export const ChevronDownIcon: FC<IIconProps> = ({
  fontSize,
  href,
  inverted,
}) => {
  if (href) {
    return (
      <Link href={href} passHref>
        <StyledIcon
          fontSize={fontSize}
          icon={faArrowCircleDown}
          $inverted={inverted}
        />
      </Link>
    );
  }
  return null;
};

export const FacebookIcon: FC<IIconProps> = ({ inverted }) => (
  <a href={facebookUrl} rel="noreferrer" target="_blank">
    <StyledIcon icon={faFacebook} $inverted={inverted} />
  </a>
);

export const InstagramIcon: FC<IIconProps> = ({ inverted }) => (
  <a href={instagramUrl} rel="noreferrer" target="_blank">
    <StyledIcon icon={faInstagram} $inverted={inverted} />
  </a>
);

export const SpotifyIcon: FC<IIconProps> = ({ inverted }) => (
  <StyledIcon icon={faSpotify} $inverted={inverted} />
);

export const TikTokIcon: FC<IIconProps> = ({ inverted }) => (
  <StyledIcon icon={faTiktok} $inverted={inverted} />
);

export const TwitterIcon: FC<IIconProps> = ({ inverted }) => (
  <a href={twitterUrl} rel="noreferrer" target="_blank">
    <StyledIcon icon={faTwitter} $inverted={inverted} />
  </a>
);

export const YoutubeIcon: FC<IIconProps> = ({ inverted }) => (
  <a href={youtubeUrl} rel="noreferrer" target="_blank">
    <StyledIcon icon={faYoutube} $inverted={inverted} />
  </a>
);
