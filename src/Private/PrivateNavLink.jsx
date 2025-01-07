import useAuth from "../Hooks/useAuth";

const PrivateNavLink = ({ children }) => {
  const { user } = useAuth();

  if (user && user.email) {
    return children;
  }
  return
};

export default PrivateNavLink;
