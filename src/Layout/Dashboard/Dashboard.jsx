import { FaCalendar, FaCalendarCheck, FaHome, FaRegClipboard, FaUsers, FaWallet } from "react-icons/fa";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { IoMenu } from "react-icons/io5";
import { MdEmail, MdReviews } from "react-icons/md";
import { RiShoppingBag2Fill } from "react-icons/ri";
import { Link, NavLink, Outlet } from "react-router-dom";
import "./dashboard.css";
import { ImSpoonKnife } from "react-icons/im";
import { TfiMenuAlt } from "react-icons/tfi";

const Dashboard = () => {
  const isAdmin = true;
  return (
    <div className=" grid grid-cols-12 h-screen">
      <div className=" h-full col-span-2 p-7 bg-[#D1A054] navlinks-dashboard">
        {isAdmin ? (
          <ul className=" flex flex-col gap-4">
            <div>
              <h1 className=" text-3xl font-bold ">Bistro boss</h1>
            </div>
            <li>
              <NavLink to="/" className=" flex gap-1 text-lg  items-center">
                {" "}
                <FaHome />
                Admin Home{" "}
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/review"
                className=" flex gap-1 text-lg  items-center"
              >
                {" "}
                <ImSpoonKnife />
                Add item{" "}
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/payment-history"
                className=" flex gap-1 text-lg  items-center"
              >
                {" "}
                <TfiMenuAlt />
               Manage items{" "}
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/"
                className=" flex gap-1 text-lg  items-center"
              >
                {" "}
                <FaRegClipboard /> Manage bookings{" "}
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/dashboard/all-users"
                className=" flex gap-1 text-lg  items-center"
              >
                {" "}
                <FaUsers />
                All users{" "}
              </NavLink>
            </li>
            
          </ul>
        ) : (
          <ul className=" flex flex-col gap-4">
            <div>
              <h1 className=" text-3xl font-bold ">Bistro boss</h1>
            </div>
            <li>
              <NavLink to="/" className=" flex gap-1 text-lg  items-center">
                {" "}
                <FaHome />
                User Home{" "}
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/review"
                className=" flex gap-1 text-lg  items-center"
              >
                {" "}
                <FaCalendar />
                Reservation{" "}
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/payment-history"
                className=" flex gap-1 text-lg  items-center"
              >
                {" "}
                <FaWallet />
                Payment history{" "}
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/dashboard/cart"
                className=" flex gap-1 text-lg  items-center"
              >
                {" "}
                <HiOutlineShoppingCart /> My cart{" "}
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/add-revies"
                className=" flex gap-1 text-lg  items-center"
              >
                {" "}
                <MdReviews />
                Add review{" "}
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/my-booking"
                className=" flex gap-1 text-lg  items-center"
              >
                {" "}
                <FaCalendarCheck />
                My booking{" "}
              </NavLink>
            </li>
          </ul>
        )}

        <div className=" w-full border-b-2 border-white my-7"></div>
        <ul className=" flex flex-col gap-4">
          <li>
            <Link to="/" className=" flex gap-1 text-lg  items-center">
              {" "}
              <FaHome />
              Home{" "}
            </Link>
          </li>
          <li>
            <Link to="/menu" className=" flex gap-1 text-lg  items-center">
              {" "}
              <IoMenu />
              Menu{" "}
            </Link>
          </li>
          <li>
            <Link
              to="/ourshop/salad"
              className=" flex gap-1 text-lg  items-center"
            >
              {" "}
              <RiShoppingBag2Fill />
              Shop{" "}
            </Link>
          </li>
          <li>
            <Link to="/" className=" flex gap-1 text-lg  items-center">
              {" "}
              <MdEmail />
              Contact{" "}
            </Link>
          </li>
        </ul>
      </div>
      <div className=" h-full col-span-10 p-7 overflow-y-scroll">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
