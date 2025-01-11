
import SectionHeading from "../SectionHeading/SectionHeading";

import FoodCard from "../FoodCard/FoodCard";
import useMenu from './../../Hooks/useMenu';

const ChefRecommends = () => {
      const [recommends] = useMenu()
      
  return (
    <div className=" my-14">
      <SectionHeading heading={'CHEF RECOMMENDS'} subHeading={'Should Try'}/>
      <div className=" container w-11/12 xl:w-full mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 xl:gap-8">
               {
                  recommends.slice(0,4).map(recommend => <FoodCard key={recommend._id} recommend={recommend}></FoodCard>)
               }
      </div>
    </div>
  );
};

export default ChefRecommends;
