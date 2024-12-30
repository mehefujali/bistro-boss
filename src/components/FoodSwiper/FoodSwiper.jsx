import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "./food-swiper.css";

const FoodSwiper = () => {
  return (
    <div className=" container mx-auto my-10">
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        loop={true}
        modules={[FreeMode, Pagination]}
        className="food-swiper-container"
      >
        <SwiperSlide className="food-swiper">
          {" "}
          <img className="" src="https://i.imgur.com/7vHJNIb.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide className="food-swiper">
          {" "}
          <img src="https://i.imgur.com/YTy25Cy.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide className="food-swiper">
          {" "}
          <img src="https://i.imgur.com/KxrVfnb.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide className="food-swiper">
          {" "}
          <img src="https://i.imgur.com/tJx6jlF.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide className="food-swiper">
          {" "}
          <img src="https://i.imgur.com/F4m1aP3.jpg" alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default FoodSwiper;
