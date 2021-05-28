import Head from "next/head";
import HomeSlider from "components/HomeSlider/HomeSlider";
import Concept from "components/Concept/Concept";
import Award from "components/Award/Award";
import Agenda from "components/Agenda/Agenda";
import Commission from "components/Commission/Commission";
import Footer from "components/Layout/Footer/Footer";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRegistrationTime } from "../src/store/actions/registration";

const Home = () => {
  const dispatch = useDispatch();

  const { expiration } = useSelector((state) => state.registration);

  useEffect(() => {
    dispatch(getRegistrationTime());
  }, []);

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
      <HomeSlider expiration={expiration} />
      <Concept expiration={expiration} />
      <Award />
      <Agenda expiration={expiration} />
      <Commission />
      <Footer />
    </div>
  );
};
export default Home;
