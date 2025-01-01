import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

const useMenu = () => {
  const [menus, setMenu] = useState([]);
  const [loding, setLoding] = useState(true);
  useEffect(() => {
    axios
      .get(
        `${import.meta.env.VITE_API_URL}/menu`
      )
      .then((res) => {
        setMenu(res.data);
        setLoding(false)
      });
      



  }, []);

  return [menus , loding];
};

export default useMenu;
