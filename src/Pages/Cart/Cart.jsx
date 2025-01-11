import Swal from "sweetalert2";
import useCart from "../../Hooks/useCart";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import CartCard from "../../components/CartCard/CartCard";

const Cart = () => {
  const [cart, refetch] = useCart();

  const axiosSecure = useAxiosSecure();
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);


  return (
    <div className=" pt-24 ">
      <div className=" container mx-auto my-10 flex flex-col gap-6">
            <div>
                  <h1>Total : ${totalPrice.toFixed(2)}</h1>
            </div>
            {
                  cart.map(item => <CartCard key={ item._id} item={item}></CartCard>)
            }
      </div>
    </div>
  );
};

export default Cart;
