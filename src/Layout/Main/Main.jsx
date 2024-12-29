import { Outlet } from "react-router-dom";
import Nav from "../../components/Nav/Nav";
import Footer from "../../components/Footer/Footer";

const Main = () => {
  return (
    <div>
      <div className=" ">
        <nav className="">
          <Nav />
        </nav>
      </div>
      <div className=" min-h-[calc(100vh-324px)]">
        <Outlet></Outlet>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Main;
