/* eslint-disable react/prop-types */

const FoodCard = ({recommend}) => {
      const { name, image, price, recipe } =  recommend
      return (
            <div>
                  <div className="  w-fit h-full bg-gray-100">
                        <div><img className=" w-full  object-contain" src={image} alt="" /></div>
                        <div className="  mx-auto p-6 flex  flex-col gap-2 justify-between">
                              <h1 className=" text-lg md:text-2xl font-semibold">{name}</h1>
                              <p className=" text-lg text-green-600">${price}</p>
                              <p className=" ">{recipe}</p>
                              <div className=" flex justify-center">
                              <button className=" p-3 px-6 rounded-md border-b-4 text-yellow-600  border-yellow-600 w-fit ">Add to cart</button>
                              </div>
                        </div>
                  </div>
            </div>
      );
};

export default FoodCard;