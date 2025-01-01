/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import MenuCard from "../../components/MenuCard/MenuCard";

const MenuItems = ({items,title}) => {
      return (
            <div>
                <div className=" container mx-auto my-14">
            <div className=" grid grid-cols-1 md:grid-cols-2 gap-8 justify-around xl:w-fit mx-auto w-11/12">
              {items.map((menu) => (
                <MenuCard key={menu._id} menu={menu}></MenuCard>
              ))}
            </div>
            <div className=" w-full flex mt-7 items-center justify-center">
              <Link to={`/ourshop/${title}`} className=" p-3 px-6 rounded-md border-b-4 border-black w-fit ">
                ORDER YOUR FAVOURITE FOOD
              </Link>
            </div>
          </div>   
            </div>
      );
};

export default MenuItems;