import { createBrowserRouter} from "react-router-dom";
import Main from "../Layout/Main/Main";
import Home from "../Pages/Home/Home";
import Menu from "../Pages/Menu/Menu";
import OurShop from "../Pages/OurShop/OurShop";
import Login from "../auth/Login/Login";
import Register from "../auth/Register/Register";
import Dashboard from "../Layout/Dashboard/Dashboard";

import AllUsers from "../Pages/Dashboard/AllUsers/AllUsers";
import PrivateRoute from "../Private/PrivateRoute";
import AddItems from "../Pages/Dashboard/AddItems/AddItems";
import Admin from "../Pages/Dashboard/Admin/Admin";
import AdminRoute from "../Private/AdminRoute";
import ManageItem from "../Pages/Dashboard/ManageItem/ManageItem";
import Reservation from "../Pages/Dashboard/Reservation/Reservation";
import Cart from "../Pages/Cart/Cart";

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
      {
        path:'carts',
        element: <Cart/>
      }
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <Dashboard />
      </PrivateRoute>
    ),
    children: [
      // {
      //    path: '/dashboard',
      //    element: <Navigate to="/dashboard/admin-home" replace/>
      // },
      {
        path: "/dashboard/cart",
        element: <Cart />,
      },
      {
        path: "/dashboard/reservation",
        element: <Reservation/>,
      },
      {
        path: "/dashboard/all-users",
        element: (
          <AdminRoute>
            <AllUsers />
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/add-items",
        element: (
          <AdminRoute>
            <AddItems />
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/admin-home",
        element: (
          <AdminRoute>
            <Admin />
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/manage-item",
        element: (
          <AdminRoute>
            <ManageItem />
          </AdminRoute>
        ),
      },
    ],
  },
]);
export default routes;
