import React from "react";

const GridPage = () => {
  return (
    <>

    {/* con Grid */}
      {/* <div className="grid grid-rows-joma6 grid-cols-1 bg-white h-screen place-content-end lg:flex lg:flex-col lg:justify-between">
        <div className="flex justify-center lg:justify-end lg:items-start border row-start-5 bg-gray-200 h-full lg:self-end lg:w-full ">1</div>
        <div className="flex justify-center lg:justify-end lg:items-center border row-start-1 row-end-4 bg-green-200 h-full  lg:w-full">2</div>
        <div className="flex justify-center lg:justify-end lg:items-end border row-start-6 bg-yellow-200  h-full lg:self-end lg:w-full lg:text-right">3</div>
      </div> */}


      {/* con flexbox */}
        <div className="h-screen flex flex-col justify-evenly">
            <div className="bg-gray-200 order-2 align-middle">1</div>
            <div className="bg-green-200 order-1 h-full">2</div>
            <div className="bg-yellow-200 order-3">3</div>
        </div>

    </>
  );
};

export default GridPage;
