// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./swiper.css";
// import required modules
import { Pagination, Navigation, Autoplay } from "swiper/modules";

export default function App() {
  return (
    <>
      <div className="">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation, Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide>
            {" "}
            <img
              className="  "
              src="https://i.imgur.com/ze9GaHS.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <img
              className="  "
              src="https://i.imgur.com/WQO6Jh9.png"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <img
              className="  "
              src="https://i.imgur.com/EPD97Vc.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <img
              className="  "
              src="https://i.imgur.com/Ab9ssc7.png"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <img
              className="  "
              src="https://i.imgur.com/xa6ZBqA.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <img
              className="  "
              src="https://i.imgur.com/T6rhO0c.jpg"
              alt=""
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}
