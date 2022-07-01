import React from "react";
import {
  pic1,
  pic2,
  pic3,
  pic4,
  pic5,
  pic6,
  pic7,
  pic8,
  pic9,
  pic10,
  pic11,
  pic12,
} from "../Assets/ImageGridPictures";

const Photography4 = () => {
  return (
    <>
      <div>Photography4</div>
      {/* <img src={pic1} alt="prueba" /> */}

      <div className="m-2 p-2 border">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-2 border">
          <div className="w-full bg-gray-200 border col-span-2">
            <img src={pic5} alt="4" className="rounded-lg" />
          </div>
          <div className=" w-full bg-gray-200 border">
            <img src={pic3} alt="4" className="rounded-lg" />
          </div>


        </div>
      </div>
    </>
  );
};

export default Photography4;
