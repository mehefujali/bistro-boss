import SectionHeading from "../SectionHeading/SectionHeading";

import MenuCard from "../MenuCard/MenuCard";
import useMenu from "../../Hooks/useMenu";

const OurMenu = () => {
  const [menus] = useMenu();
  const popularMenu = menus.filter((menu) => menu.category === "popular");
  return (
    <div className=" my-12">
      <SectionHeading
        heading={"FROM OUR MENU"}
        subHeading={"Check it out"}
      ></SectionHeading>
      <div className=" container mx-auto">
        <div className=" grid grid-cols-1 md:grid-cols-2 gap-8 justify-around xl:w-fit mx-auto w-11/12">
          {popularMenu.map((menu) => (
            <MenuCard key={menu._id} menu={menu}></MenuCard>
          ))}
        </div>
        <div className=" w-full flex mt-7 items-center justify-center">
          <button className=" p-3 px-6 rounded-md border-b-4 border-black w-fit ">
            View Full Menu
          </button>
        </div>
      </div>
    </div>
  );
};

export default OurMenu;
