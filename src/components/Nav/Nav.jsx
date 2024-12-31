import { Link, NavLink} from "react-router-dom";

const Nav = () => {
 
  return (
    <div >
      <div className={`navbar   mx-auto md:fixed z-50 md:bg-opacity-45 bg-black text-white`}>
        <div className="navbar-start">
          <div className="dropdown mr-3">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <img className=" w-5" src="https://i.imgur.com/VpKmN04.png" alt="" />
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] gap-3 mt-3 w-52 p-2 shadow"
            >
              <NavLink>Home</NavLink>
              <NavLink>Contact Us</NavLink>
              <NavLink>Dashboard</NavLink>
              <NavLink to='/menu'>Our Menu</NavLink>
              <NavLink>Our shop</NavLink>
            </ul>
          </div>
          <Link to="/" className=" flex items-start md:items-baseline gap-1">
            <img
              className=" w-10"
              src="https://i.imgur.com/dOyMJIH.png"
              alt=""
            />
            <span className=" text-xl  md:text-2xl font-bold hidden md:flex">Bistro Boss</span>
          </Link>
        </div>

        <div className="navbar-end">
          <ul className="menu menu-horizontal px-1 hidden lg:flex gap-4">
            <NavLink>Home</NavLink>
            <NavLink>Contact Us</NavLink>
            <NavLink>Dashboard</NavLink>
            <NavLink to='/menu'>Our Menu</NavLink>
            <NavLink>Our shop</NavLink>
          </ul>
          <div>
            <button>Login</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
