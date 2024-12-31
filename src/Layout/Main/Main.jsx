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
      <div className=" overflow-hidden bg-white min-h-[calc(100vh-257px)]">
        <Outlet></Outlet>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};


//        _
//        .__(.)< (MEOW)
//         \___)   
//  ~~~~~~~~~~~~~~~~~~
export default Main;
