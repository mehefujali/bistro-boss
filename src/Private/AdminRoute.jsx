/* eslint-disable react/prop-types */
import { Navigate, useLocation } from "react-router-dom";
import Loader from "../components/loader/Loader";
import useAdmin from "../Hooks/useAdmin";
import useAuth from "../Hooks/useAuth";

const AdminRoute = ({children}) => {
      const { pathname } = useLocation();
  const { user, loading } = useAuth();
  const [isAdmin, isAdminLoading] = useAdmin();
  if (loading || isAdminLoading) {
    return <Loader />;
  }
  if (!user) {
    return <Navigate state={pathname} to="/login"></Navigate>;
  }
  if (user && isAdmin) {
    return children;
  }
};

export default AdminRoute;
