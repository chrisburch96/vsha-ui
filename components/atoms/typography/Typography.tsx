import styled from "styled-components";

export const Title = styled.span`
  font-family: ${(props) => props.theme.typography.title.fontFamily};
  font-size: ${(props) => props.theme.typography.title.fontSize};
  line-height: ${(props) => props.theme.typography.title.lineHeight};
`;

export const Heading = styled.span`
  font-family: ${(props) => props.theme.typography.heading.fontFamily};
  font-size: ${(props) => props.theme.typography.heading.fontSize};
  line-height: ${(props) => props.theme.typography.heading.lineHeight};
`;

export const Subheading = styled.span`
  font-family: ${(props) => props.theme.typography.subheading.fontFamily};
  font-size: ${(props) => props.theme.typography.subheading.fontSize};
  line-height: ${(props) => props.theme.typography.subheading.lineHeight};
`;

export const Body = styled.span`
  font-family: ${(props) => props.theme.typography.body.fontFamily};
  font-size: ${(props) => props.theme.typography.body.fontSize};
  line-height: ${(props) => props.theme.typography.body.lineHeight};
`;

export const Caption = styled.span`
  font-family: ${(props) => props.theme.typography.heading.fontFamily};
  font-size: ${(props) => props.theme.typography.heading.fontSize};
  line-height: ${(props) => props.theme.typography.heading.lineHeight};
`;
