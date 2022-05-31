import { useEffect, useState } from "react";

export interface IMousePosition {
  x: number | null;
  y: number | null;
}

export const useMousePosition = () => {
  const [mousePosition, setMousePosition] = useState<IMousePosition>({
    x: null,
    y: null,
  });

  useEffect(() => {
    const handleMouseMove = ({ clientX, clientY }: MouseEvent) => {
      setMousePosition({ x: clientX, y: clientY });
    };
    const handleMouseLeave = () => {
      setMousePosition({ x: null, y: null });
    };
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return mousePosition;
};
