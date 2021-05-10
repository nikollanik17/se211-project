import "styles/globals.scss";
import "styles/navbarreset.scss";

// swiper
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/scrollbar/scrollbar.scss";
import "rc-slider/assets/index.css";

// components
import Navbar from "components/Layout/Navbar/Navbar";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default MyApp;
