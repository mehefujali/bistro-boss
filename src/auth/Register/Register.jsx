import { useContext } from "react";
import { FaFacebookF, FaGoogle } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const Register = () => {
  const { googleSignIn } = useContext(AuthContext);
  const handleGooogleSignIn = () => {
    googleSignIn()
      .then((res) => {
        console.log(res);
      })
      .catch(() => {});
  };
  return (
    <div>
      <div
        className=" h-[100vh] w-[100vw]  flex items-center justify-center bg-cover"
        style={{ backgroundImage: "url(https://i.imgur.com/54Ky7iG.png)" }}
      >
        <div className=" w-11/12 lg:w-fit h-fit flex flex-col md:flex-row items-center gap-4 border shadow-lg p-8 lg:p-20 2xl:p-28 rounded shadow-gray-500 backdrop-blur-[2px] ">
          <div>
            <img src="https://i.imgur.com/dKZiHzX.png" alt="" />
          </div>
          <div className=" md:w-6/12">
            <form className=" flex w-full flex-col gap-1 items-center">
              <label
                htmlFor="name"
                className=" w-full flex flex-col gap-1 items-start"
              >
                <span>Name : </span>
                <input
                  type="text"
                  placeholder="Enter your Name"
                  name="name"
                  id="name"
                  className=" w-full input focus:outline-none border-gray-400 rounded"
                />
              </label>
              <label
                htmlFor="email"
                className=" w-full flex flex-col gap-1 items-start"
              >
                <span>Email : </span>
                <input
                  type="text"
                  placeholder="Enter your email"
                  name="email"
                  id="email"
                  className=" w-full input focus:outline-none border-gray-400 rounded"
                />
              </label>
              <label
                htmlFor="password"
                className=" w-full flex flex-col gap-1 items-start"
              >
                <span>Password : </span>
                <input
                  type="password"
                  placeholder="Enter your password"
                  name="password"
                  id="password"
                  className=" w-full input focus:outline-none  border-gray-400 rounded"
                />
              </label>
              <button className="btn mt-4 w-full disabled:cursor-not-allowed bg-[#D1A054B3] text-white rounded">
                Sign Up
              </button>
            </form>
            <div className=" mt-2 text-center">
              <span className=" text-[#D1A054]">
                Already registered?
                <Link className=" font-semibold" to="/login">
                  {" "}
                  Go to log in
                </Link>
              </span>
              <p>Or sign up with</p>
              <div className=" flex w-fit gap-2 mx-auto mt-3">
                <div className=" cursor-pointer text-lg p-2 rounded-full border border-black w-fit">
                  {" "}
                  <FaFacebookF />
                </div>
                <div onClick={handleGooogleSignIn} className=" cursor-pointer text-lg p-2 rounded-full border border-black w-fit">
                  {" "}
                  <FaGoogle />
                </div>
                <div className=" cursor-pointer text-lg p-2 rounded-full border border-black w-fit">
                  {" "}
                  <IoLogoGithub />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
