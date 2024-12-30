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
          <div className=" relative">
            <img className="" src="https://i.imgur.com/7vHJNIb.jpg" alt="" />
            <h1  className="  absolute text-3xl -mt-14 right-1/2 translate-x-1/2 text-white">Salads</h1>
          </div>
        </SwiperSlide>
        <SwiperSlide className="food-swiper">
          {" "}
          <div>
          <img src="https://i.imgur.com/YTy25Cy.jpg" alt="" />
          <h1  className=" text-3xl -mt-14 text-white">Desserts</h1>
          </div>
        </SwiperSlide>
        <SwiperSlide className="food-swiper">
          {" "}
         <div>
         <img src="https://i.imgur.com/KxrVfnb.jpg" alt="" />
         <h1  className=" text-3xl -mt-14 text-white">Soups</h1>
         </div>
        </SwiperSlide>
        <SwiperSlide className="food-swiper">
          {" "}
          <div className="">
          <img src="https://i.imgur.com/tJx6jlF.jpg" alt="" />
          <h1  className=" text-3xl -mt-14 text-white">Salads</h1>
          </div>
        </SwiperSlide>
        <SwiperSlide className="food-swiper">
          {" "}
         <div className=" h-full">
             <img src="https://i.imgur.com/F4m1aP3.jpg" alt="" />
             <h1  className=" text-3xl -mt-14 text-white">Pizzas</h1>
         </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default FoodSwiper;
