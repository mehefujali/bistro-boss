import {  useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";


const useCart = () => {
      // tan stack query 
      const axiosSecure = useAxiosSecure()
      const {data : cart = []} = useQuery({
            queryKey: ['cart'] ,
            queryFn: async () => {
                  const {data} = await axiosSecure.get('/cart')
                  return data
            }
      })
      return [cart]
};

export default useCart;