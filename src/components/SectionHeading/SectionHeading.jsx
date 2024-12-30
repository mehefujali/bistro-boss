/* eslint-disable react/prop-types */

const SectionHeading = ({ heading, subHeading }) => {
  return (
    <div className=" my-10">
      <div className=" md:w-5/12 xl:w-fit text-center mx-auto">
        <p className=" text-yellow-600 italic text-lg"> ---{subHeading}--- </p>
        <h1 className=" py-3 border-y-4 text-2xl md:text-4xl">{heading}</h1>
      </div>
    </div>
  );
};

export default SectionHeading;
