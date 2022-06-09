export enum Color {
  Primary = "primary",
  Secondary = "secondary",
  Neutral = "neutral",
}

export enum Size {
  XXSmall = "xxs",
  XSmall = "xs",
  Small = "s",
  Medium = "m",
  Large = "l",
  XLarge = "xl",
}

export const Pixel = (value?: number | null) => (value ? `${value}px` : null);

export interface IColor {
  [percentage: number]: string;
}

export type IPalette = {
  [color in Color]: IColor;
};

export type ISpacing = {
  [size in Size]: string;
};

export interface IFont {
  fontFamily: string;
  fontSize: string;
  fontWeight: number;
  lineHeight: number;
}

export interface ITypography {
  [font: string]: IFont;
}

export interface ITheme {
  palette: IPalette;
  spacing: ISpacing;
  typography: ITypography;
}
