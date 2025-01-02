import { useContext } from "react";
import { FaFacebookF, FaGoogle } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";
import { Link, Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { useForm } from "react-hook-form";
import { Helmet } from "react-helmet";
import toast from "react-hot-toast";

const Register = () => {
      const {state} = useLocation()
  const { googleSignIn  ,emailSignUp , user } = useContext(AuthContext);
  const handleGooogleSignIn = () => {
    googleSignIn()
      .then(() => {
         toast.success('Sign in success')
      })
      .catch(() => {
            toast.error('Google login failed. Please try again.') 
      });
  };

  const {
    register,
    handleSubmit,
  
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
      emailSignUp(data.email , data.password)
      .then(()=> {
            toast.success('Account created successfully!')
      })
      .catch (err => {
            if(err.message === 'Firebase: Error (auth/email-already-in-use).') {
                  toast.error('Email is already in use.')
            }
            else{
                  toast.error('Sign-up failed. Please try again.')
            }
      })
  };

 

  if(user){
    return   <Navigate to={state||"/"}></Navigate>
  }


 
  return (
    <div>
      <Helmet>
            <title>Bistro | Register</title>
      </Helmet>
      <div
        className=" h-[100vh] w-[100vw]  flex items-center justify-center bg-cover"
        style={{ backgroundImage: "url(https://i.imgur.com/54Ky7iG.png)" }}
      >
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
                htmlFor="name"
                className=" w-full flex flex-col gap-1 items-start"
              >
                <span>Name : </span>
                <input
                  {...register("name", { required: true })}
                  type="text"
                  placeholder="Enter your Name"
                  name="name"
                  id="name"
                  className=" w-full input focus:outline-none border-gray-400 rounded"
                />
                {errors.name && (
                  <span className="text-red-500">Name is required</span>
                )}
              </label>
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
                {errors.email && (
                  <span className="text-red-500">Email is required</span>
                )}
              </label>
              <label
                htmlFor="password"
                className=" w-full flex flex-col gap-1 items-start"
              >
                <span>Password : </span>
                <input
                  {...register("password", {
                    required: true,
                    minLength: 6,
                    maxLength: 20,
                  })}
                  type="password"
                  placeholder="Enter your password"
                  name="password"
                  id="password"
                  className=" w-full input focus:outline-none  border-gray-400 rounded"
                />
                {errors?.password?.type === "required" && (
                  <span className="text-red-500">Password is required</span>
                )}
                {errors?.password?.type === "minLength" && (
                  <span className="text-red-500">
                    Input must be at least 6 characters long.
                  </span>
                )}
                {errors?.password?.type === "maxLength" && (
                  <span className="text-red-500">
                    Input must be between 6 and 20 characters long.
                  </span>
                )}
              </label>
              <button className="btn mt-4 w-full disabled:cursor-not-allowed bg-[#D1A054B3] text-white rounded">
                Sign Up
              </button>
            </form>
            <div className=" mt-2 text-center">
              <span className=" text-[#D1A054]">
                Already registered?
                <Link  state={state} className=" font-semibold" to="/login">
                  {" "}
                  Go to log in
                </Link>
              </span>
              <p>Or sign up with</p>
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
                <div 
                onClick={()=>{
                  toast.error('Login failed. Please try again.')
               }}
                className=" cursor-pointer text-lg p-2 rounded-full border border-black w-fit">
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
