import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main/Main";
import Home from "../Pages/Home/Home";
import Menu from "../Pages/Menu/Menu";
import OurShop from "../Pages/OurShop/OurShop";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
            path : '/' ,
            element : <Home></Home>
      },
      {
        path: 'menu' ,
        element: <Menu/>
      },
      {
        path: 'ourshop/:category' ,
        element: <OurShop/>
      }
    ],
  },
]);
export default routes;
