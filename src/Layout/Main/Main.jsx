import { Outlet, useLocation } from "react-router-dom";
import Nav from "../../components/Nav/Nav";
import Footer from "../../components/Footer/Footer";


const Main = () => {
  const {pathname} = useLocation()
 

  console.log(pathname)
  
  return (
    <div>
      {pathname.includes('login')||pathname.includes('register')||<div className=" ">
        <nav className="">
          <Nav />
        </nav>
      </div>}
      
        <Outlet></Outlet>
     
      {pathname.includes('login')||pathname.includes('register')||<div>
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
