import React from "react";
import { BrandInstagram, BrandFacebook } from "tabler-icons-react";

const Photography1 = () => {
  return (
    <div className=" bg-fondo-flower bg-center bg-cover h-screen">
      <div className="h-screen flex flex-col justify-evenly lg:justify-between mx-10">
        <div className="flex justify-center lg:justify-end  lg:order-1 order-2">
          <div className="mt-3 w-full flex lg:order-first justify-center lg:justify-end">
            <p className="text-gray-50 hover:underline text-lg lg:text-2xl cursor-pointer">
              johndoephotography.com
            </p>
          </div>
        </div>

        <div className="flex justify-center lg:justify-end  lg:order-2 h-full lg:h-auto">
          <div className="w-full flex flex-col order-first">
            <h1 className="text-gray-50 text-5xl lg:text-6xl font-bold self-center lg:self-end">
              Jhon Doe
            </h1>
            <p className="text-gray-50 text-2xl lg:text-3xl font-semibold self-center lg:self-end">
              Photographer
            </p>

            <div className="flex mt-3 justify-evenly lg:justify-end">
              <p className="text-gray-50 font-semibold text-lg lg:text-xl cursor-pointer hover:text-gray-300 hover:underline lg:ml-10">
                Portfolio
              </p>
              <p className="text-gray-50 font-semibold text-lg lg:text-xl cursor-pointer hover:text-gray-300 hover:underline lg:ml-10">
                Info
              </p>
              <p className="text-gray-50 font-semibold text-lg lg:text-xl cursor-pointer hover:text-gray-300 hover:underline lg:ml-10">
                About
              </p>
              <p className="text-gray-50 font-semibold text-lg lg:text-xl cursor-pointer hover:text-gray-300 hover:underline lg:ml-10">
                Contact
              </p>
            </div>
          </div>
        </div>

        <div className="flex justify-center lg:justify-end  order-3">
          <div className="flex w-full order-last mb-3 justify-center lg:justify-end">
            <BrandInstagram color="white" className="cursor-pointer" size={35} strokeWidth={1} />
            <BrandFacebook color="white" className="cursor-pointer" size={35} strokeWidth={1} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Photography1;
