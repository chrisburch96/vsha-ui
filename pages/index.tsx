import type { NextPage } from "next";
import Head from "next/head";

import {
  Caption,
  Heading,
  Subheading,
  Text,
  TextButton,
  Title,
} from "components/atoms";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>VSHA</title>
        <meta name="description" content="Official VSHA Web Application" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <TextButton>VSHA</TextButton>
      <Title>Title</Title>
      <Heading>Heading</Heading>
      <Subheading>Subheading</Subheading>
      <Text>Text</Text>
      <Caption>Caption</Caption>
    </div>
  );
};

export default Home;
