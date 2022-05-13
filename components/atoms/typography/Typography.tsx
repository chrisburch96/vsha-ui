import styled from "styled-components";

export const Title = styled.span`
  font-family: ${(props) => props.theme.typography.title.fontFamily};
  font-size: ${(props) => props.theme.typography.title.fontSize};
  font-weight: ${(props) => props.theme.typography.title.fontWeight};
  line-height: ${(props) => props.theme.typography.title.lineHeight};
`;

export const Heading = styled.span`
  font-family: ${(props) => props.theme.typography.heading.fontFamily};
  font-size: ${(props) => props.theme.typography.heading.fontSize};
  font-weight: ${(props) => props.theme.typography.heading.fontWeight};
  line-height: ${(props) => props.theme.typography.heading.lineHeight};
`;

export const Subheading = styled.span`
  font-family: ${(props) => props.theme.typography.subheading.fontFamily};
  font-size: ${(props) => props.theme.typography.subheading.fontSize};
  font-weight: ${(props) => props.theme.typography.subheading.fontWeight};
  line-height: ${(props) => props.theme.typography.subheading.lineHeight};
`;

export const Text = styled.span`
  font-family: ${(props) => props.theme.typography.text.fontFamily};
  font-size: ${(props) => props.theme.typography.text.fontSize};
  font-weight: ${(props) => props.theme.typography.text.fontWeight};
  line-height: ${(props) => props.theme.typography.text.lineHeight};
`;

export const Caption = styled.span`
  font-family: ${(props) => props.theme.typography.caption.fontFamily};
  font-size: ${(props) => props.theme.typography.caption.fontSize};
  font-weight: ${(props) => props.theme.typography.caption.fontWeight};
  line-height: ${(props) => props.theme.typography.caption.lineHeight};
`;
