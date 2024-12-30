// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./swiper.css";

// Import required modules
import { Pagination, Navigation, Autoplay } from "swiper/modules";

export default function App() {
  return (
    <div className="swiper-container ">
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation, Autoplay]}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="https://i.imgur.com/ze9GaHS.jpg" alt="Slide 1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.imgur.com/WQO6Jh9.png" alt="Slide 2" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.imgur.com/EPD97Vc.jpg" alt="Slide 3" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.imgur.com/Ab9ssc7.png" alt="Slide 4" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.imgur.com/xa6ZBqA.jpg" alt="Slide 5" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
