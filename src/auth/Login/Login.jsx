import { useContext, useEffect } from "react";
import { FaFacebookF, FaGoogle } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";
import { Link, Navigate, useLocation } from "react-router-dom";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
  // validateCaptcha,
} from "react-simple-captcha";
import { AuthContext } from "../../Provider/AuthProvider";
import { Helmet } from "react-helmet";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
const Login = () => {
  const { state } = useLocation();
  const { googleSignIn, user, emailLogin } = useContext(AuthContext);
  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);
  const CaptchaValidation = (captcha) => {
    if (validateCaptcha(captcha)) {
      return true;
    } else {
      return false;
    }
  };

  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const captcha = CaptchaValidation(data.captcha);
    if (!captcha) {
      toast.error("Captcha verification failed. Please try again.");
      return;
    }
    emailLogin(data.email, data.password)
      .then(() => {
        toast.success("Login successful!");
      })
      .catch((err) => {
        if (err.message === "Firebase: Error (auth/invalid-credential).") {
          toast.error("Invalid email or password. Please try again.");
        }
        else{
          toast.error('Login failed. Please try again.')
        }
      });
  };

  const handleGooogleSignIn = () => {
    googleSignIn()
      .then(() => {
        toast.success('Sign in success')
      })
      .catch(() => {
        toast.error('Google login failed. Please try again.') 
      });
  };

  if (user) {
    return <Navigate to={state || "/"}></Navigate>;
  }
  return (
    <div
      className=" h-[100vh] w-[100vw]  flex items-center justify-center bg-cover"
      style={{ backgroundImage: "url(https://i.imgur.com/54Ky7iG.png)" }}
    >
      <Helmet>
        <title>Bistro | Login</title>
      </Helmet>
      <div className=" w-11/12 lg:w-fit h-fit flex flex-col md:flex-row items-center gap-4 border shadow-lg p-8 lg:p-20 2xl:p-28 rounded shadow-gray-500 backdrop-blur-[2px] ">
        <div>
          <img src="https://i.imgur.com/dKZiHzX.png" alt="" />
        </div>
        <div className=" md:w-6/12">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className=" flex w-full flex-col gap-1 items-center"
          >
            <label
              htmlFor="email"
              className=" w-full flex flex-col gap-1 items-start"
            >
              <span>Email : </span>
              <input
                {...register("email", { required: true })}
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
                {...register("password", { required: true })}
                type="password"
                placeholder="Enter your password"
                name="password"
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
            <label htmlFor="" className=" w-full flex flex-col gap-1 my-2 items-start">
              <input
                {...register("captcha", { required: true })}
                type="text"
                placeholder="Type here"
                name="captcha"
                id=""
                className=" w-full input focus:outline-none border-gray-400 rounded"
              />
              {errors.captcha && (
                <span className="text-red-500">Enter Captcha</span>
              )}
            </label>
            <button className="btn w-full disabled:cursor-not-allowed bg-[#D1A054B3] text-white rounded">
              Sign in
            </button>
          </form>
          <div className=" mt-2 text-center">
            <span className=" text-[#D1A054]">
              New here?
              <Link state={state} className=" font-semibold" to="/register">
                {" "}
                Create a New Account
              </Link>
            </span>
            <p>or sign with</p>
            <div className=" flex w-fit gap-2 mx-auto mt-3">
              <div 
              onClick={()=>{
                toast.error('Login failed. Please try again.')
             }}
              
              className=" cursor-pointer text-lg p-2 rounded-full border border-black w-fit">
                {" "}
                <FaFacebookF />
              </div>
              <div
                onClick={handleGooogleSignIn}
                className=" cursor-pointer text-lg p-2 rounded-full border border-black w-fit"
              >
                {" "}
                <FaGoogle />
              </div>
              <div onClick={()=>{
                 toast.error('Login failed. Please try again.')
              }} className=" cursor-pointer text-lg p-2 rounded-full border border-black w-fit">
                {" "}
                <IoLogoGithub />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
