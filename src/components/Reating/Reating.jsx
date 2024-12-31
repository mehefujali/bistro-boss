import SectionHeading from "../SectionHeading/SectionHeading";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import { useEffect, useState } from "react";
import axios from "axios";
import { BiSolidQuoteLeft } from "react-icons/bi";
import Rating from "react-rating";
import { CiStar } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
const Reating = () => {
  const [reviews, setReview] = useState([]);
  useEffect(() => {
    axios
      .get(
        "https://raw.githubusercontent.com/ProgrammingHero1/bistro-boss-restaurant-resources/refs/heads/main/reviews.json"
      )
      .then((res) => {
        setReview(res.data);
      });
  }, []);
  return (
    <div className=" my-14">
      <div className="container mx-auto">
        <SectionHeading
          heading={"TESTIMONIALS"}
          subHeading={"What Our Clients Say"}
        />
        <div>
          <Swiper
            navigation={true}
            modules={[Navigation, Autoplay]}
            className="mySwiper"
            autoplay={{
              delay: 3000,
            }}
            loop={true}
          >
            {reviews.map((review) => (
              <SwiperSlide key={review._id}>
                <div className=" w-9/12 md:w-11/12 mx-auto flex flex-col items-center gap-2">
                  <Rating
                    emptySymbol=<CiStar className=" text-2xl  text-yellow-500" />
                    fullSymbol=<FaStar className=" text-2xl text-yellow-500" />
                    initialRating={review.rating}
                    readonly
                    fractions={2}
                  />
                  <span className=" text-center text-3xl md:text-5xl lg:text-7xl w-fit mx-auto">
                    <BiSolidQuoteLeft />
                  </span>
                  <p>{review.details}</p>
                  <h1 className=" text-2xl md:text-3xl text-yellow-500">
                    {review.name}
                  </h1>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Reating;
