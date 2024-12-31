/* eslint-disable react/prop-types */
import MenuCard from "../../components/MenuCard/MenuCard";

const MenuItems = ({items}) => {
      return (
            <div>
                <div className=" container mx-auto my-14">
            <div className=" grid grid-cols-1 md:grid-cols-2 gap-8 justify-around xl:w-fit mx-auto w-11/12">
              {items.map((menu) => (
                <MenuCard key={menu._id} menu={menu}></MenuCard>
              ))}
            </div>
            <div className=" w-full flex mt-7 items-center justify-center">
              <button className=" p-3 px-6 rounded-md border-b-4 border-black w-fit ">
                ORDER YOUR FAVOURITE FOOD
              </button>
            </div>
          </div>   
            </div>
      );
};

export default MenuItems;