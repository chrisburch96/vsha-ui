import type { NextPage } from "next";
import Head from "next/head";

import { Title } from "components/atoms";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>VSHA</title>
        <meta name="description" content="Official VSHA Web Application" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Title>Home Page</Title>
    </div>
  );
};

export default Home;
