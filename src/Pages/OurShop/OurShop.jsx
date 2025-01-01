import { useState } from "react";
import Cover from "../../Shaired/Cover/Cover";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useMenu from "../../Hooks/useMenu";
import ShopItems from "../../Shaired/ShopItems/ShopItems";
import { ScrollRestoration, useParams } from "react-router-dom";
import { Helmet } from "react-helmet";

const OurShop = () => {
      const {category} = useParams()
      const categories = [ 'salad' , 'pizza','soup', 'desserts' , 'drinks' ]
      const initialIndex = categories.indexOf(category)
      const [tabIndex, setTabIndex] = useState(initialIndex);
  console.log(tabIndex);
  const [menus] = useMenu();
  const soupMenu = menus.filter((menu) => menu.category === "soup");
  const saladMenu = menus.filter((menu) => menu.category === "salad");
  const pizzaMenu = menus.filter((menu) => menu.category === "pizza");
  const drinks = menus.filter((menu) => menu.category === "drinks");
  const dessertMenu = menus.filter((menu) => menu.category === "dessert");
  return (
    <div>
      <Helmet>
            <title>Bistro | Shop</title>
      </Helmet>
      <ScrollRestoration/>
      <div>
        <Cover
          title={"OUR SHOP"}
          des={"Would you like to try a dish?"}
          img={"https://i.imgur.com/PD3aFR4.jpg"}
        ></Cover>
      </div>

      <div className=" my-14 container mx-auto">
        <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
          <TabList>
            <Tab>Salad</Tab>
            <Tab>Pizza</Tab>
            <Tab>Soup</Tab>
            <Tab>desserts</Tab>
            <Tab>Drinks</Tab>
          </TabList>

          <TabPanel>
            <div className=" ">
              <ShopItems items={saladMenu}></ShopItems>
            </div>
          </TabPanel>
          <TabPanel>
            <div className=" ">
              <ShopItems items={pizzaMenu}></ShopItems>
            </div>
          </TabPanel>
          <TabPanel>
            <div className=" ">
              <ShopItems items={soupMenu}></ShopItems>
            </div>
          </TabPanel>
          <TabPanel>
            <div className=" ">
              <ShopItems items={dessertMenu}></ShopItems>
            </div>
          </TabPanel>
          <TabPanel>
            <div className=" ">
              <ShopItems items={drinks}></ShopItems>
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default OurShop;
