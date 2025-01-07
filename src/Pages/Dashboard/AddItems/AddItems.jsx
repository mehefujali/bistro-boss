import SectionHeading from "../../../components/SectionHeading/SectionHeading";
import { useForm } from "react-hook-form";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useState } from "react";
import toast from "react-hot-toast";

const imageHostingApi = `https://api.imgbb.com/1/upload?key=${
  import.meta.env.VITE_IMAGE_BB_API_KEY
}`;

const AddItems = () => {
  const [isLoadin, setLoading] = useState(false);
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();
  const { register, handleSubmit } = useForm();
  const onSubmit = async (data) => {
    setLoading(true);
    const imageFile = { image: data.image[0] };
    const res = await axiosPublic.post(imageHostingApi, imageFile, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    if (res.data.success) {
      const foodItem = {
        name: data.name,
        category: data.category,
        price: parseFloat(data.price),
        recipe: data.recipe,
        image: res.data.data.display_url,
      };
      axiosSecure
        .post("/food", foodItem)
        .then((res) => {
          setLoading(false);
          if (res.data.insertedId) {
            toast.success("Item added");
          }
        })
        .catch((err) => {
          setLoading(false);
          toast.error(" Item adding faild");
          console.log(err);
        });
    }
  };

  return (
    <div>
      <div>
        <SectionHeading heading={"ADD AN ITEM"} subHeading={"What's new"} />
      </div>

      <div>
        <div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className=" bg-[#F3F3F3] max-w-3xl mx-auto p-8 rounded-md flex flex-col gap-4"
          >
            <label className=" flex flex-col gap-2">
              <h3>
                Recipi Name <span className="text-red-500">*</span>
              </h3>
              <input
                {...register("name", { required: true })}
                className=" input focus:outline-none rounded-md focus:border-none border"
                type="text"
              />
            </label>
            <div className=" flex gap-3">
              <label className=" flex flex-col gap-2 flex-1">
                <h3>
                  Category <span className="text-red-500">*</span>
                </h3>
                <select
                  defaultValue={"default"}
                  {...register("category", { required: true })}
                  className=" select focus:outline-none rounded-md focus:border-none border"
                  type="text"
                >
                  <option disabled value="default">
                    Category
                  </option>
                  <option value="salad">Salad</option>
                  <option value="pizza">Pizza</option>
                  <option value="soup">Soup</option>
                  <option value="desserts">Desserts</option>
                  <option value="drinks">Drinks</option>
                </select>
              </label>
              <label className=" flex flex-col gap-2 flex-1">
                <h3>
                  Price <span className="text-red-500">*</span>
                </h3>
                <input
                  {...register("price", { required: true })}
                  className=" input focus:outline-none rounded-md focus:border-none border"
                  type="number"
                />
              </label>
            </div>
            <label className=" flex flex-col gap-2">
              <h3>
                Recipe Details <span className="text-red-500">*</span>
              </h3>
              <textarea
                {...register("recipe", { required: true })}
                className="textarea resize-none h-32 focus:outline-none rounded-md focus:border-none border"
                name="recipe"
                id="recipe"
              ></textarea>
            </label>
            <input
              {...register("image", { required: true })}
              className=" file-input"
              type="file"
              name="image"
              id="image"
            />
            <button className=" btn hover:bg-[#D1A054] bg-[#D1A054] text-white">
              {isLoadin ? "Adding item..." : "Add Item"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddItems;
