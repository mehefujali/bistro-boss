import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main/Main";
import Home from "../Pages/Home/Home";
import Menu from "../Pages/Menu/Menu";

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
      }
    ],
  },
]);
export default routes;
