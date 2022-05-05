import type { NextPage } from "next";
import Head from "next/head";

import {
  Body,
  Button,
  Caption,
  Heading,
  Subheading,
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
      <h1>App goes here</h1>
      <Button>VSHA</Button>
      <Title>Title</Title>
      <Heading>Heading</Heading>
      <Subheading>Subheading</Subheading>
      <Body>Body</Body>
      <Caption>Caption</Caption>
    </div>
  );
};

export default Home;
