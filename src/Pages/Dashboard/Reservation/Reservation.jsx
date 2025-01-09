import { loadStripe } from "@stripe/stripe-js";
import SectionHeading from "../../../components/SectionHeading/SectionHeading";
import { Elements } from "@stripe/react-stripe-js";
import CheckOutForm from "./CheckOutForm";



const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PK)

const Reservation = () => {
      return (
            <div>
                  <SectionHeading 
                  heading="PAYMENT"></SectionHeading>
                  <div>
                            <Elements stripe={stripePromise}>
                                              <CheckOutForm/>
                            </Elements>
                  </div>
            </div>
      );
};

export default Reservation;