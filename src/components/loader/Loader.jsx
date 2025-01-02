import { useContext } from "react";
import { ClipLoader } from "react-spinners";
import { AuthContext } from "../../Provider/AuthProvider";

const Loader = () => {
      const {loading} = useContext(AuthContext)
  return <div className=" w-full h-[100vh] flex justify-center items-center">
      <ClipLoader
       color={'#D1A054'}
       loading={loading}
       
       size={80}
       aria-label="Loading Spinner"
       data-testid="loader"
      />
  </div>;
};

export default Loader;
