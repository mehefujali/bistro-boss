import SectionHeading from "../SectionHeading/SectionHeading";
import "./homeparallax.css";
const Homeparallax = () => {
  return (
    <div className=" my-14">
      <div
        className="container mx-auto   bg-cover bg-fixed p-7 md:p-20 "
        id="parallax-home-bg"
      >
        <div className=" text-white">
          {" "}
          <SectionHeading
            heading={"FROM OUR MENU"}
            subHeading={"Check it out"}
          />
        </div>
        <div className="  flex flex-col lg:flex-row  items-center gap-5 mb-12">
          <div>
            <img
              className="  "
              src="https://i.imgur.com/LfJRWEe.jpg"
              alt=""
            />
          </div>
          <div className=" text-white  max-w-2xl ">
            <h1 className=" text-lg">March 20, 2023</h1>
            <h6 className=" text-lg"> March 20, 2023 WHERE CAN I GET SOME?</h6>
            <p>
              Dynamically coordinate B2B users whereas equity invested
              intellectual capital. Distinctively network prospective leadership
              skills for resource-leveling architectures. Distinctively incubate
              top-line scenarios and collaborative value. Dynamically initiate
              extensive manufactured products whereas B2B ideas. Progressively
              coordinate technically sound models and market positioning
              processes. Conveniently utilize functionalized bandwidth.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homeparallax;
