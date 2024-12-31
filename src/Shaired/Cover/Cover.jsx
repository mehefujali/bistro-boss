/* eslint-disable react/prop-types */
import './cover.css'
const Cover = ({img,title,des}) => {
  return (
    <div>
      <div
        className="  flex justify-center items-center p-8 md:p-10 h-[650px]  lg:p-28 w-full  bg-cover"
        style={{backgroundImage:`url("${img}")`}}
      >
        <div className="  bg-black text-center bg-opacity-60 text-white  backdrop-blur-sm    w-full md:p-16 p-5 ">
          <div>
            <h1 className=" text-3xl md:text-5xl mb-6 text-yellow-600 ">
              {title}
            </h1>
            <p>
              {des}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cover;
