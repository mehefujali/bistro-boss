/* eslint-disable react/prop-types */
import { HiOutlineShoppingCart } from "react-icons/hi";
import { FaRegCalendarAlt } from "react-icons/fa";
import { CgMenuBoxed, CgProfile } from "react-icons/cg";
import { RiWallet3Line } from "react-icons/ri";
import { TbLogout } from "react-icons/tb";
import { FiX } from "react-icons/fi";
import useAuth from "../../Hooks/useAuth";
import { Link } from "react-router-dom";
const ProfileMenu = ({setIsOpen}) => {
  const {signOutUser} = useAuth()
  
  return (
    <div
      className=" absolute z-50 right-4 mt-6 bg-white  text-black p-8 w-60 
              backdrop-blur-md rounded-md  border-[#0000006e]
             border-2
            "
    >
      <div className="  ">
        <ul  className=" flex flex-col gap-3 relative ">
          <span onClick={()=>{
            
            setIsOpen(false)}}><FiX className=" cursor-pointer text-xl absolute -top-4 -right-4"/></span>
         
          <li className=" flex items-center gap-1 cursor-pointer hover:bg-black p-1 hover:bg-opacity-10">
          <CgProfile  className=" text-xl" /> Profile
          </li>
          <li className=" flex items-center gap-1 cursor-pointer hover:bg-black p-1 hover:bg-opacity-10">
          <FaRegCalendarAlt className=" text-xl" /> Reservation
          </li>
          <li className=" flex items-center gap-1 cursor-pointer hover:bg-black p-1 hover:bg-opacity-10">
          <RiWallet3Line  className=" text-xl"/> Payment history
          </li>
         
          <Link to="/carts"  onClick={()=>setIsOpen(false)} className=" flex items-center gap-1 cursor-pointer hover:bg-black p-1 hover:bg-opacity-10">
            <HiOutlineShoppingCart className=" text-xl" /> Carts
          </Link>
          <li className=" flex items-center gap-1 cursor-pointer hover:bg-black p-1 hover:bg-opacity-10">
          <CgMenuBoxed  className=" text-xl"/> My booking
          </li>
          <li onClick={signOutUser} className=" flex items-center gap-1 cursor-pointer hover:bg-black p-1 hover:bg-opacity-10">
          <TbLogout  className=" text-xl"/> Log out
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ProfileMenu;
