import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main/Main";
import Home from "../Pages/Home/Home";
import Menu from "../Pages/Menu/Menu";
import OurShop from "../Pages/OurShop/OurShop";
import Login from "../auth/Login/Login";
import Register from "../auth/Register/Register";
import Dashboard from "../Layout/Dashboard/Dashboard";
import Cart from "../Pages/Dashboard/Cart/Cart";


const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "menu",
        element: <Menu />,
      },
      {
        path: "ourshop/:category",
        element: <OurShop />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
    ],
  },
  {
    path : '/dashboard' ,
    element : <Dashboard/>,
    children : [
      {
        path : '/dashboard/cart' ,
        element : <Cart/>
      }
    ]
  }
]);
export default routes;
