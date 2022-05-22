import styled from "styled-components";

interface ITypographyProps {
  inverted?: boolean;
}

const Typography = styled.span<ITypographyProps>`
  color: ${({ inverted, theme }) => theme.colors.neutral[inverted ? 100 : 900]};
`;

export const Title = styled(Typography)`
  font-family: ${({ theme }) => theme.typography.title.fontFamily};
  font-size: ${({ theme }) => theme.typography.title.fontSize};
  font-weight: ${({ theme }) => theme.typography.title.fontWeight};
  line-height: ${({ theme }) => theme.typography.title.lineHeight};
`;

export const Heading = styled(Typography)`
  font-family: ${({ theme }) => theme.typography.heading.fontFamily};
  font-size: ${({ theme }) => theme.typography.heading.fontSize};
  font-weight: ${({ theme }) => theme.typography.heading.fontWeight};
  line-height: ${({ theme }) => theme.typography.heading.lineHeight};
`;

export const Subheading = styled(Typography)`
  font-family: ${({ theme }) => theme.typography.subheading.fontFamily};
  font-size: ${({ theme }) => theme.typography.subheading.fontSize};
  font-weight: ${({ theme }) => theme.typography.subheading.fontWeight};
  line-height: ${({ theme }) => theme.typography.subheading.lineHeight};
`;

export const Text = styled(Typography)`
  font-family: ${({ theme }) => theme.typography.text.fontFamily};
  font-size: ${({ theme }) => theme.typography.text.fontSize};
  font-weight: ${({ theme }) => theme.typography.text.fontWeight};
  line-height: ${({ theme }) => theme.typography.text.lineHeight};
`;

export const Caption = styled(Typography)`
  font-family: ${({ theme }) => theme.typography.caption.fontFamily};
  font-size: ${({ theme }) => theme.typography.caption.fontSize};
  font-weight: ${({ theme }) => theme.typography.caption.fontWeight};
  line-height: ${({ theme }) => theme.typography.caption.lineHeight};
`;
