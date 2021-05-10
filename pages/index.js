import Head from "next/head";
import HomeSlider from "components/HomeSlider/HomeSlider";
import Concept from "components/Concept/Concept";

const Home = () => {
  return (
    <div className="page">
      <Head>
        <title>CyberGames</title>
        <meta
          name="description"
          content="Cyber games, game development tournament"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomeSlider />
      <Concept />
      <div style={{ height: 1000 }}></div>
    </div>
  );
};
export default Home;
