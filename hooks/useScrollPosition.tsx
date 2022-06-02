import { useEffect, useState } from "react";

import { IPosition } from "hooks";

export const useScrollPosition = () => {
  const [scrollPosition, setScrollPosition] = useState<IPosition>({
    x: null,
    y: null,
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition({ x: window.scrollX, y: window.scrollY });
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return scrollPosition;
};
