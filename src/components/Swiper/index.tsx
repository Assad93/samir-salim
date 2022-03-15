// import Swiper core and required modules
import { Autoplay, Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

import styles from "./Swiper.module.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { IRepository } from "../Portfolio";

type SwiperProps = {
  repos: IRepository[];
};

export default (props: SwiperProps) => {
  return (
    <Swiper
      // install Swiper modules
      modules={[Autoplay, Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      className={styles.swiper}
    >
      {props.repos?.map((item, index) => {
        // don´t show the AboutMe Repo
        if (index === 0) {
          return;
        }

        return (
          <SwiperSlide key={index} title={item.repo}>
            <a href={item.link} target="_blank">
              <img
                src={`http://localhost:3000/images/${item.repo}.png`}
                alt={item.repo}
                className={styles.swiper__img}
              />
            </a>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};
