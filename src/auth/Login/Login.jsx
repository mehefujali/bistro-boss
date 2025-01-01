import { useEffect, useState } from "react";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";

const Login = () => {
  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);
  const handleCaptchaValidation = (e) => {
    const user_input = e.target.value;
    if (validateCaptcha(user_input) === true) {
      return true;
    } else {
      return false;
    }
  };
  return (
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
              htmlFor="email"
              className=" w-full flex flex-col gap-1 items-start"
            >
              <span>Email : </span>
              <input
                type="text"
                placeholder="Enter your email"
                name=""
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
                name=""
                id="password"
                className=" w-full input focus:outline-none  border-gray-400 rounded"
              />
            </label>
            <label
              className=" w-full flex flex-col gap-1 my-2 items-start"
              htmlFor=""
            >
              <div
                readOnly
                type="text"
                name=""
                id=""
                className=" select-none w-full   flex items-center focus:outline-none border-gray-400 rounded"
              >
                <LoadCanvasTemplate />
              </div>
            </label>
            <input
              type="text"
              placeholder="Type here"
              name="captcha"
              id=""
              className=" w-full input focus:outline-none border-gray-400 rounded"
            />
            <button className="btn w-full disabled:cursor-not-allowed bg-[#D1A054B3] text-white rounded">
              Sign in
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
