/* eslint-disable react/prop-types */

import Swal from "sweetalert2";
import useAuth from "../../Hooks/useAuth";
import { useNavigate } from "react-router-dom";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

const FoodCard = ({recommend}) => {
      const axiosSecure = useAxiosSecure()
      const {user} =  useAuth()
      const navigate = useNavigate()
     
      const { name, image, price, recipe,_id } =  recommend
      const handleAddtoCart = () => {
            console.log(user)
            if(!user?.email){
                  Swal.fire({
                        title: "You are not login",
                        text: "are you want login?",
                        icon: "warning",
                        showCancelButton: true,
                        confirmButtonColor: "#3085d6",
                        cancelButtonColor: "#d33",
                        confirmButtonText: "Login"
                      }).then((result) => {
                        if (result.isConfirmed) {
                          navigate('/login')
                        }
                      });
            }
            if(user && user?.email){
                  const cart = {
                        menuId: _id ,
                        email : user.eamil ,
                        name ,
                        image ,
                        price 
                  }
                  axiosSecure.post('/cart' , cart)
                  .then(res =>{
                       if(res.data.insertedId){
                        Swal.fire({
                              position: "center",
                              icon: "success",
                              title: `${name} added to cart`,
                              showConfirmButton: false,
                              timer: 1500
                            });
                       }
                  })
            }

      }
      return (
            <div>
                  <div className="  w-full h-full bg-gray-100">
                        <div><img className=" w-full  object-contain" src={image} alt="" /></div>
                        <div className="  mx-auto p-6 flex  flex-col gap-2 justify-between">
                              <h1 className=" text-lg md:text-2xl font-semibold">{name}</h1>
                              <p className=" text-lg text-green-600">${price}</p>
                              <p className=" ">{recipe}</p>
                              <div className=" flex justify-center">
                              <button onClick={()=>handleAddtoCart(recommend)} className=" p-3 px-6 rounded-md border-b-4 text-yellow-600  border-yellow-600 w-fit bg-gray-200 ">Add to cart</button>
                              </div>
                        </div>
                  </div>
            </div>
      );
};

export default FoodCard;