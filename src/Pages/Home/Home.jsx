import BistroBossAbout from "../../components/BistroBossAbout/BistroBossAbout";
import CallUs from "../../components/CallUs/CallUs";
import ChefRecommends from "../../components/ChefRecommends/ChefRecommends";
import FoodSwiper from "../../components/FoodSwiper/FoodSwiper";
import Hero from "../../components/Hero/Hero";
import OurMenu from "../../components/OurMenu/OurMenu";
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
            <div>
              <BistroBossAbout/>
            </div>
            <div>
              <OurMenu/>
            </div>
            <div>
              <CallUs></CallUs>
            </div>
            <div>
              <ChefRecommends/>
            </div>
      </div>
  </div>;
};

export default Home;
