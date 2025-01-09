import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect } from "react";
import toast from "react-hot-toast";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useCart from "../../../Hooks/useCart";
import { useState } from "react";
import useAuth from "../../../Hooks/useAuth";

const CheckOutForm = () => {
  const stripe = useStripe();
  const element = useElements();
  const [clientSecret, setClientSecret] = useState();
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const [cart] = useCart();
  const price = cart?.reduce((total, item) => total + item.price, 0);

  useEffect(() => {
    axiosSecure.post("/create-payment-intent", { price }).then((res) => {
      setClientSecret(res.data.clientSecret);
    });
  }, [axiosSecure, price]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !element) {
      return;
    }
    const card = element.getElement(CardElement);
    if (card == null) {
      return;
    }
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log("payment error", error);
      toast.error(error.message);
    } else {
      console.log("payment methode", paymentMethod);
     
    }

    //     conform payments
    const { paymentIntent, error: conError } = await stripe.confirmCardPayment(
      clientSecret,
      {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email || "anonymus",
            name: user?.displayName || "anonymus",
          },
        },
      }
    );
    if (conError) {
      console.log("payment error ", conError);
    } else {
      console.log("payment intant ", paymentIntent);
      if(paymentIntent.status === "succeeded"){
            toast.success("Payment success");
      }
    }
  };
  return (
    <form onSubmit={handleSubmit} className=" w-4/12 mx-auto  mt-20">
      <CardElement
        options={{
          style: {
            base: {
              fontSize: "16px",
              color: "#424770",
              "::placeholder": {
                color: "#aab7c4",
              },
            },
            invalid: {
              color: "#9e2146",
            },
          },
        }}
      />
      <button
        type="submit"
        className=" mt-10 bg-green-500 hover:bg-green-600 btn rounded-md w-full"
        disabled={!stripe || !clientSecret}
      >
        Pay
      </button>
    </form>
  );
};

export default CheckOutForm;
