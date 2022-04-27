import type { NextPage } from "next";
import { useRouter } from "next/router";

const Album: NextPage = () => {
  const router = useRouter();
  const { album } = router.query;
  return (
    <div>
      <h1>Album: {album}</h1>
    </div>
  );
};

export default Album;
