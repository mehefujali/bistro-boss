import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";

const CheckOutForm = () => {
  const stripe = useStripe();
  const element = useElements()
  const handleSubmit = async (event) => {
    event.preventDefault();
    if(!stripe || !element){
      return
    }
    const card = element.getElement(CardElement)
    if(card == null) {
      return
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
      <button type="submit" className=" mt-10 bg-green-500 hover:bg-green-600 btn rounded-md w-full" disabled={!stripe}>
        Pay
      </button>
    </form>
  );
};

export default CheckOutForm;
