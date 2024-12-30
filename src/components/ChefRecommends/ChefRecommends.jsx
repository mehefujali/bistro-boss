import { useEffect, useState } from "react";
import SectionHeading from "../SectionHeading/SectionHeading";
import axios from "axios";
import FoodCard from "../FoodCard/FoodCard";

const ChefRecommends = () => {
      const [recommends,setRecommends] = useState([])
      useEffect(()=>{
        axios.get('https://raw.githubusercontent.com/ProgrammingHero1/bistro-boss-restaurant-resources/refs/heads/main/menu.json')
        .then(res => {
            const recommendsData = res.data.filter(food => food.category === 'popular')
            setRecommends(recommendsData)
        })
      },[])
  return (
    <div className=" my-14">
      <SectionHeading heading={'CHEF RECOMMENDS'} subHeading={'Should Try'}/>
      <div className=" container w-11/12 xl:w-full mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 xl:gap-8">
               {
                  recommends.map(recommend => <FoodCard key={recommend._id} recommend={recommend}></FoodCard>)
               }
      </div>
    </div>
  );
};

export default ChefRecommends;
