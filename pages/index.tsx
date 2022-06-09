import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>VSHA</title>
        <meta name="description" content="Official VSHA Web Application" />
        <link rel="icon" href="/favicon-black.ico" />
      </Head>
      <div style={{ backgroundColor: "#777986", height: "100vh" }} />
      <div id="content" style={{ height: "100vh" }} />
    </div>
  );
};

export default Home;
