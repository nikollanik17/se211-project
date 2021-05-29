import { useState } from "react";
import styles from "./HomeSlider.module.scss";
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";
import Timer from "../Timer/Timer";

// install Swiper components
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

const HomeSlider = ({ expiration }) => {
  const [controlledSwiper, setControlledSwiper] = useState(null);

  return (
    <div id="HomeSlider">
      <Swiper
        // spaceBetween={50}
        slidesPerView={1}
        navigation
        allowSlideNext
        allowSlidePrev
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        // onSwiper={(swiper) => console.log(swiper)}
        // onSlideChange={() => console.log("slide change")}
        controller={{ control: controlledSwiper }}
        autoplay
        className={styles.sliderContainer}
      >
        <SwiperSlide>
          <img src="assets/slider4-min.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="assets/slider1-min.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="assets/slider2-min.jpg" />
        </SwiperSlide>
        {/* <SwiperSlide>
        <img
          src="assets/slider3.jpg"
          style={{ width: "100%", height: "100%" }}
        />
			</SwiperSlide> */}
      </Swiper>
      <Timer timeTillDate={expiration} timeFormat="MM DD YYYY, h:mm a" />
    </div>
  );
};

export default HomeSlider;
