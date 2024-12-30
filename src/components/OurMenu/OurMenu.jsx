import { useEffect, useState } from "react";
import SectionHeading from "../SectionHeading/SectionHeading";
import axios from "axios";
import MenuCard from "../MenuCard/MenuCard";

const OurMenu = () => {
  const [menus, setMenu] = useState([]);
  useEffect(() => {
    axios
      .get(
        "https://raw.githubusercontent.com/ProgrammingHero1/bistro-boss-restaurant-resources/refs/heads/main/menu.json"
      )
      .then((res) => {
        const popularMenu = res.data.filter(
          (menu) => menu.category === "popular"
        );
        setMenu(popularMenu);
      });
  }, []);
  return (
    <div className=" my-12">
      <SectionHeading
        heading={"FROM OUR MENU"}
        subHeading={"Check it out"}
      ></SectionHeading>
      <div className=" container mx-auto">
        <div className=" grid grid-cols-1 md:grid-cols-2 gap-8 justify-around w-fit mx-auto">
            {
                  menus.map(menu => <MenuCard key={menu._id} menu={menu}></MenuCard>)
            }
        </div>
        <div className=" w-full flex mt-7 items-center justify-center">
            <button className=" p-3 px-6 rounded-md border-b-4 border-black w-fit ">View Full  Menu</button>
        </div>
      </div>
    </div>
  );
};

export default OurMenu;
