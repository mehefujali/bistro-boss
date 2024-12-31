import { Helmet } from "react-helmet";
import Cover from "../../Shaired/Cover/Cover";
import OurMenu from "../../components/OurMenu/OurMenu";

const Menu = () => {
      return (
            <div>
                  <Helmet>
                        <title>Bistro boss | Menu</title>
                  </Helmet>
                  <div>
                        <Cover img={'https://i.imgur.com/Gh7PAqN.jpg'} title={'OUR MENU'} des={'Would you like to try a dish?'}/>
                         
                         <div>
                              <OurMenu/>
                         </div>
                  </div>
            </div>
      );
};

export default Menu;