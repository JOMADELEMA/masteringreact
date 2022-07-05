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

      {/* <div className="m-2 p-2 border">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-2 border">
          <div className="w-full bg-gray-200 border col-span-2">
            <img src={pic5} alt="4" className="rounded-lg" />
          </div>
          <div className=" w-full bg-gray-200 border">
            <img src={pic3} alt="4" className="rounded-lg" />
          </div>


        </div>
      </div> */}


      <div className="m-2 p-2 border">
        <div className="flex flex-wrap gap-2">

          <div className="w-32 h-auto border bg-green-200 rounded-md p-2" style={{backgroundImage: `url(${pic3})`, backgroundSize: "cover" }}>
              {/* <img src={pic3} alt="3" className=""/> */}
          </div>
          <div className="w-64 h-auto border bg-green-200 rounded-md p-2" style={{backgroundImage: `url(${pic1})`, backgroundSize: "cover" }}>
              {/* <img src={pic3} alt="3" className=""/> */}
          </div>
          <div className="w-20 h-auto border bg-green-200 rounded-md p-2" style={{backgroundImage: `url(${pic2})`, backgroundSize: "" }}>
              {/* <img src={pic3} alt="3" className=""/> */}
          </div>
          <div className="w-32 h-auto border bg-red-500 rounded-md p-2">
              <img src={pic1} alt="3" />
          </div>
          <div className="w-32 h-auto border bg-slate-400 rounded-md p-2">
              <img src={pic2} alt="3" className="object-cover w-96" />
          </div>
          <div className="w-32 h-auto border bg-violet-400 rounded-md p-2">
              <img src={pic4} alt="3" />
          </div>
          <div className="w-32 h-auto border bg-orange-300 rounded-md p-2">
              <img src={pic5} alt="3" />
          </div>
          {/* <div className="w-32 h-48 border bg-blue-300 rounded-md">

          </div>
          <div className="w-64 h-48 border bg-green-600 rounded-md">

          </div>
          <div className="w-32 h-64 border bg-violet-700 rounded-md">

          </div>
          <div className="w-32 h-20 border bg-red-700 rounded-md">

          </div>
          <div className="w-32 h-64 border bg-gray-400 rounded-md">

          </div>
          <div className="w-32 h-20 border bg-cyan-300 rounded-md">

          </div>
          <div className="w-32 h-64 border bg-amber-200 rounded-md">

          </div>
          <div className="w-32 h-20 border bg-red-200 rounded-md">

          </div>
          <div className="w-32 h-32 border bg-cyan-300 rounded-md">

          </div>
          <div className="w-32 h-40 border bg-green-800 rounded-md">

          </div>
          <div className="w-32 h-60 border bg-gray-400 rounded-md">

          </div>
          <div className="w-32 h-20 border bg-purple-300 rounded-md">

          </div>
          <div className="w-32 h-32 border bg-black rounded-md">

          </div> */}



        </div>
      </div>
    </>
  );
};

export default Photography4;
