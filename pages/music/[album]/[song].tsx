import type { NextPage } from "next";
import { useRouter } from "next/router";

const Song: NextPage = () => {
  const router = useRouter();
  const { song } = router.query;
  return (
    <div>
      <h1>Song: {song}</h1>
    </div>
  );
};

export default Song;
