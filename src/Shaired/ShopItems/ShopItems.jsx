/* eslint-disable react/prop-types */

import FoodCard from "../../components/FoodCard/FoodCard";

const ShopItems = ({items}) => {
      return (
            <div>
                  <div
                  className=" container w-11/12 xl:w-full mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 xl:gap-8"
                  >
                   {
                        items.map(item => <FoodCard key={item._id} recommend={item}/> )
                   }
                  </div>
            </div>
      );
};

export default ShopItems;