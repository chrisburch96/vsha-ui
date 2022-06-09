import { FC } from "react";

import Image from "next/image";

interface ILogoProps {
  inverted?: boolean;
}

export const CompactLogo: FC<ILogoProps> = ({ inverted }) => {
  const color = inverted ? "white" : "black";
  const height = 50;
  const width = 2.85 * height;
  return (
    <div>
      <Image
        alt={`logo-${color}`}
        height={height}
        src={`/logo/logo-${color}.png`}
        width={width}
      />
    </div>
  );
};

export const WelcomeLogo: FC<ILogoProps> = ({ inverted }) => {
  const color = inverted ? "white" : "black";
  return (
    <div>
      <Image
        alt={`logo-moon-${color}`}
        height={500}
        src={`/logo/logo-moon-${color}.png`}
        width={500}
      />
    </div>
  );
};
