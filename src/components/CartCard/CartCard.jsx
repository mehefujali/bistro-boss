/* eslint-disable react/prop-types */

import "./cartcard.css";
import { FaRegTrashAlt } from "react-icons/fa";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useCart from "../../Hooks/useCart";
import Swal from "sweetalert2";

const CartCard = ({ item }) => {
  const { image, name, price } = item;
  const [, refetch] = useCart();
  const axiosSecure = useAxiosSecure();
  
  const handleUpdateQuantity = async(quantity) => {
    await axiosSecure.patch(`/cart/quantity/${item._id}`, {quantity});
    refetch();
  };

  const handleDeleteCart = async () => {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then(async (result) => {
        if (result.isConfirmed) {
          const { data } = await axiosSecure.delete(`/cart/${item._id}`);
  
          if (data.deletedCount) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          }
        }
      });
    };


  return (
    <div className=" flex  gap-4 bg-gray-100 relative rounded-md overflow-hidden">
      <div>
        <img className=" max-w-64" src={image} alt="" />
      </div>
      <div className=" p-5 w-full space-y-3">
        <h1 className=" text-3xl font-bold">{name}</h1>
        <p className=" text-xl font-semibold text-green-500">${price.toFixed(2)}</p>
        <div className=" flex items-center gap-2">
          <span 
          onClick={() => {
            handleUpdateQuantity(
              item.quantity > 1 && parseFloat(item.quantity) - 1 
            );
          }}
          
          className=" text-3xl cursor-pointer select-none"> -</span>

          <p className="bg-white w-20 text-lg px-3 rounded-md py-1 no-arrows focus:outline-none text-center">
           {item?.quantity || 1}
          </p>

          <span
            onClick={() => {
              handleUpdateQuantity(
                item?.quantity ? parseInt(item?.quantity) + 1 : 2
              );
            }}
            className="text-2xl cursor-pointer select-none"
          >
            +
          </span>
        </div>

        <button 
        onClick={handleDeleteCart}
        className=" absolute right-6 bottom-6 p-3 rounded-md text-white flex gap-1 items-center bg-red-500 select-none">
          {" "}
          <FaRegTrashAlt /> Delete cart
        </button>
      </div>
    </div>
  );
};

export default CartCard;
