/* eslint-disable react/prop-types */
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import Loader from "../components/loader/Loader";

const PrivateRoute = ({ children }) => {
  const { pathname } = useLocation();
  const { user, loding } = useContext(AuthContext);
  if (loding) {
    return <Loader/>
  }
  if (!user) {
    return <Navigate state={pathname} to="/login"></Navigate>;
  }
  if (user) {
    return children;
  }
};

export default PrivateRoute;
