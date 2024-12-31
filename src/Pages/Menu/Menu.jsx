import { Helmet } from "react-helmet";
import Cover from "../../Shaired/Cover/Cover";
import useMenu from "../../Hooks/useMenu";
import SectionHeading from "../../components/SectionHeading/SectionHeading";

import MenuItems from "../../Shaired/MenuItems/MenuItems";
import { ScrollRestoration } from "react-router-dom";

const Menu = () => {
  const [menus] = useMenu();
  const soupMenu = menus.filter((menu) => menu.category === "soup");
  const saladMenu = menus.filter((menu) => menu.category === "salad");
  const pizzaMenu = menus.filter((menu) => menu.category === "pizza");
  const offeredMenu = menus.filter((menu) => menu.category === "offered");
  const dessertMenu = menus.filter((menu) => menu.category === "dessert");
  return (
    <div>
      <ScrollRestoration/>
      <Helmet>
        <title>Bistro boss | Menu</title>
      </Helmet>
      <div>
        <Cover
          img={"https://i.imgur.com/Gh7PAqN.jpg"}
          title={"OUR MENU"}
          des={"Would you like to try a dish?"}
        />

        {/* <div className=" h-[300px] bg-red-500">
            
        </div> */}
        <SectionHeading
          heading={"TODAY'S OFFER"}
          subHeading={"Don't miss"}
        ></SectionHeading>

        <div className=" container mx-auto">
          <MenuItems items={offeredMenu} />
          {/* dessert  */}
          <Cover
            title={"DESSERTS"}
            des="Proactively mesh cooperative channels through high-payoff data. Progressively maintain goal-oriented infrastructures via magnetic initiatives. Credibly incubate revolutionary scenarios without leading-edge total linkage."
            img="https://i.imgur.com/fIh1oPq.jpg"
          ></Cover>

          <MenuItems items={dessertMenu}></MenuItems>

          {/* pizza  */}

          <Cover
            title={"PIZZA"}
            des="Proactively mesh cooperative channels through high-payoff data. Progressively maintain goal-oriented infrastructures via magnetic initiatives. Credibly incubate revolutionary scenarios without leading-edge total linkage."
            img="https://i.imgur.com/tx3fxyK.jpg"
          ></Cover>

          <MenuItems items={pizzaMenu}></MenuItems>
          {/* SALADS  */}

          <Cover
            title={"SALADS"}
            des="Proactively mesh cooperative channels through high-payoff data. Progressively maintain goal-oriented infrastructures via magnetic initiatives. Credibly incubate revolutionary scenarios without leading-edge total linkage."
            img="https://i.imgur.com/o08yvV1.jpg"
          ></Cover>

          <MenuItems items={saladMenu}></MenuItems>
          {/* SOUPS  */}

          <Cover
            title={"SOUPS"}
            des="Proactively mesh cooperative channels through high-payoff data. Progressively maintain goal-oriented infrastructures via magnetic initiatives. Credibly incubate revolutionary scenarios without leading-edge total linkage."
            img="https://i.imgur.com/YO9ybwF.jpg"
          ></Cover>

          <MenuItems items={soupMenu}></MenuItems>
        </div>
      </div>
    </div>
  );
};

export default Menu;
