import { storiesOf } from "@storybook/react";

import {
  FacebookIcon,
  InstagramIcon,
  Logo,
  SpotifyIcon,
  TikTokIcon,
  TwitterIcon,
  YoutubeIcon,
} from "components/atoms";

storiesOf("Atoms/Iconography", module)
  .add("Logo", () => <Logo />)
  .add("FacebookIcon", () => <FacebookIcon />)
  .add("InstagramIcon", () => <InstagramIcon />)
  .add("SpotifyIcon", () => <SpotifyIcon />)
  .add("TikTokIcon", () => <TikTokIcon />)
  .add("TwitterIcon", () => <TwitterIcon />)
  .add("YoutubeIcon", () => <YoutubeIcon />);
