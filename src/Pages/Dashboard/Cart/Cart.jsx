import { MdDelete } from "react-icons/md";
import useCart from "../../../Hooks/useCart";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import SectionHeading from "../../../components/SectionHeading/SectionHeading";

const Cart = () => {
  const [cart, refetch] = useCart();
  const axiosSecure = useAxiosSecure();
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);

  const handleDeleteCart = async (id) => {
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
        const { data } = await axiosSecure.delete(`/cart/${id}`);

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
    <div>
      <div>
        <SectionHeading subHeading="---My Cart---" heading="WANNA ADD MORE?" />

        <div className=" my-7 flex justify-around items-center">
          <h1 className=" text-xl">Total orders : {cart.length}</h1>
          <h1 className=" text-xl">Total Pride : ${totalPrice}</h1>
          <button className="btn rounded-md bg-[#D1A054] text-white">Pay</button>
        </div>
      </div>
      <div className="overflow-x-auto ">
        <table className="table">
          {/* head */}
          <thead className=" text-lg text-white bg-[#D1A054] rounded-tl-lg ">
            <tr>
              <th>
                <label></label>
              </th>
              <th>ITEM IMAGE</th>
              <th>ITEM NAME</th>
              <th>PRICE</th>
              <th>ACTION</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {cart.map((item, idx) => (
              <tr key={item._id}>
                <th>
                  <label>{idx + 1}</label>
                </th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className=" h-12 w-12">
                        <img
                          className="rounded-md"
                          src={item?.image}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                  </div>
                </td>
                <td>{item?.name}</td>
                <td>$ {item?.price}</td>
                <th>
                  <div
                    onClick={() => handleDeleteCart(item._id)}
                    className=" w-fit h-fit p-2 cursor-pointer bg-red-500 rounded-full"
                  >
                    <MdDelete className="text-lg  text-white " />
                  </div>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Cart;
