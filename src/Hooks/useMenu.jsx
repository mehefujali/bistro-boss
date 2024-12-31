import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

const useMenu = () => {
  const [menus, setMenu] = useState([]);
  const [loding, setLoding] = useState(true);
  useEffect(() => {
    axios
      .get(
        "https://raw.githubusercontent.com/ProgrammingHero1/bistro-boss-restaurant-resources/refs/heads/main/menu.json"
      )
      .then((res) => {
        setMenu(res.data);
        setLoding(false)
      });
      



  }, []);

  return [menus , loding];
};

export default useMenu;
