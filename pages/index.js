import Head from "next/head";
import HomeSlider from "components/HomeSlider/HomeSlider";
import Concept from "components/Concept/Concept";
import Award from "components/Award/Award";
import Agenda from "components/Agenda/Agenda";
import Commission from "components/Commission/Commission";
import Footer from "components/Layout/Footer/Footer";

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
      <Award />
      <Agenda />
      <Commission />
      <Footer />
    </div>
  );
};
export default Home;
