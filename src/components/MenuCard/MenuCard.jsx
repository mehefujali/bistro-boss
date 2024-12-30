/* eslint-disable react/prop-types */
const MenuCard = ({ menu }) => {
  const { name, image, price, recipe } = menu;

  return (
    <div>
      <div className=" flex items-center gap-6">
        <img className=" w-28 h-28 object-cover rounded-full rounded-tl-none" src={image} alt="" />
        <div>
          <div className=" flex items-center justify-between">
            <h3 className=" text-lg md:text-xl xl:text-2xl ">{name}--------</h3> <p className=" text-yellow-600 ">${price}</p>
          </div>
          <p className=" text-gray-400">{recipe}</p>
        </div>
      </div>
    </div>
  );
};

export default MenuCard;
