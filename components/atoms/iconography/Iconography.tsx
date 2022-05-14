import {
  faFacebook,
  faInstagram,
  faTiktok,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

const facebookUrl = "https://www.facebook.com/vshaofficial";
const instagramUrl = "https://www.instagram.com/vshaofficial";
const twitterUrl = "https://www.twitter.com/vshaofficial";

const StyledIcon = styled(FontAwesomeIcon)`
  color: ${(props) => props.theme.colors.neutral[100]};
  font-size: ${(props) => props.theme.typography.text.fontSize};
  &:hover,
  :focus {
    color: ${(props) => props.theme.colors.primaryBlue[100]};
  }
  &:active {
    color: ${(props) => props.theme.colors.primaryBlue[110]};
  }
`;

export const FacebookIcon = () => (
  <a href={facebookUrl} rel="noreferrer" target="_blank">
    <StyledIcon icon={faFacebook} />
  </a>
);

export const InstagramIcon = () => (
  <a href={instagramUrl} rel="noreferrer" target="_blank">
    <StyledIcon icon={faInstagram} />
  </a>
);

export const TikTokIcon = () => <StyledIcon icon={faTiktok} />;

export const TwitterIcon = () => (
  <a href={twitterUrl} rel="noreferrer" target="_blank">
    <StyledIcon icon={faTwitter} />
  </a>
);

export const YoutubeIcon = () => <StyledIcon icon={faYoutube} />;
