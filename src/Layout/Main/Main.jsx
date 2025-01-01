import { Outlet, useLocation } from "react-router-dom";
import Nav from "../../components/Nav/Nav";
import Footer from "../../components/Footer/Footer";

const Main = () => {
  const {pathname} = useLocation()
  const withOutNavFooter = pathname.includes('login')
  console.log(pathname)
  console.log(withOutNavFooter)
  return (
    <div>
      {withOutNavFooter||<div className=" ">
        <nav className="">
          <Nav />
        </nav>
      </div>}
      
        <Outlet></Outlet>
     
      {withOutNavFooter||<div>
        <Footer />
      </div>}
    </div>
  );
};


//        _
//        .__(.)< (MEOW)
//         \___)   
//  ~~~~~~~~~~~~~~~~~~
export default Main;
