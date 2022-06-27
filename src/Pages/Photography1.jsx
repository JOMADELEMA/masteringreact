import React from "react";
import { BrandInstagram, BrandFacebook } from "tabler-icons-react";

const Photography1 = () => {
  return (
    <div className=" bg-fondo-semuc bg-center bg-cover h-screen">
      <div className="mx-20 grid grid-rows-6 lg:flex lg:flex-col h-screen lg:justify-between">
        <div className="w-full row-start-6 self-center">
          <div className="mt-3 border w-full flex lg:order-first justify-center lg:justify-end">
            <p className="text-gray-50 hover:text-gray-500 text-2xl">
              johndoephotography.com
            </p>
          </div>
        </div>

        <div className="w-full row-start-1 col-span-1">
          <div className="border w-full flex flex-col order-first">
            <div className="text-gray-50 text-5xl font-bold border self-center lg:self-end">
              Jhon Doe
            </div>
            <div className="text-gray-50 text-3xl font-semibold border self-center lg:self-end">
              Photographer
            </div>

            <div className="flex mt-3 border justify-evenly lg:justify-end">
              <p className="text-gray-50 font-semibold text-xl cursor-pointer hover:text-gray-600 lg:ml-10">
                Portfolio
              </p>
              <p className="text-gray-50 font-semibold text-xl cursor-pointer hover:text-gray-600 lg:ml-10">
                Info
              </p>
              <p className="text-gray-50 font-semibold text-xl cursor-pointer hover:text-gray-600 lg:ml-10">
                About
              </p>
              <p className="text-gray-50 font-semibold text-xl cursor-pointer hover:text-gray-600 lg:ml-10">
                Contact
              </p>
            </div>
          </div>
        </div>

        <div className="w-full row-start-6 self-end">
          <div className="flex border w-full order-last mb-3 justify-center lg:justify-end">
            <BrandInstagram color="white" className="cursor-pointer" />
            <BrandFacebook color="white" className="cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Photography1;
