import FoodSwiper from "../../components/FoodSwiper/FoodSwiper";
import Hero from "../../components/Hero/Hero";
import SectionHeading from "../../components/SectionHeading/SectionHeading";

const Home = () => {
  return <div>

      <div className="">
            <Hero/>
            <div>
              <SectionHeading heading={'ORDER ONLINE'} subHeading={'From 11:00am to 10:00pm'}></SectionHeading>
            </div>
            <div>
              <FoodSwiper/>
            </div>
      </div>
  </div>;
};

export default Home;
