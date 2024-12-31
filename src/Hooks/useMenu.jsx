import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

const useMenu = ({query}) => {
  const [menus, setMenu] = useState([]);
  useEffect(() => {
    axios
      .get(
        "https://raw.githubusercontent.com/ProgrammingHero1/bistro-boss-restaurant-resources/refs/heads/main/menu.json"
      )
      .then((res) => {
        const popularMenu = res.data.filter(
          (menu) => menu.category === query
        );
        setMenu(popularMenu);
      });
  }, [query]);

  return [menus]
};

export default useMenu;
