import { Outlet, useLocation } from "react-router-dom";
import Nav from "../../components/Nav/Nav";
import Footer from "../../components/Footer/Footer";

const Main = () => {
  const { pathname } = useLocation();



  return (
    <div>
      {pathname.includes("login") || pathname.includes("register") || (
        <div className=" ">
          <nav className="">
            <Nav />
          </nav>
        </div>
      )}

      <div className=" min-h-[calc(100vh-257px)] " id="close-drop-profile">
        <Outlet></Outlet>
      </div>

      {pathname.includes("login") || pathname.includes("register") || (
        <div>
          <Footer />
        </div>
      )}
    </div>
  );
};

//        _
//        .__(.)< (MEOW)
//         \___)
//  ~~~~~~~~~~~~~~~~~~
export default Main;
