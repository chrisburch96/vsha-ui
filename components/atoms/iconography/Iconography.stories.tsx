import { storiesOf } from "@storybook/react";

import {
  FacebookIcon,
  InstagramIcon,
  TikTokIcon,
  TwitterIcon,
  YoutubeIcon,
} from "./Iconography";

storiesOf("Atoms/Iconography", module)
  .add("FacebookIcon", () => <FacebookIcon />)
  .add("InstagramIcon", () => <InstagramIcon />)
  .add("TikTokIcon", () => <TikTokIcon />)
  .add("TwitterIcon", () => <TwitterIcon />)
  .add("YoutubeIcon", () => <YoutubeIcon />);
