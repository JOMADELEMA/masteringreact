import React from "react";
import pic1 from '../Assets/ImageGridPictures/1.jpg';
import pic2 from '../Assets/ImageGridPictures/2.jpeg';
import pic3 from '../Assets/ImageGridPictures/3.jpeg';
import pic4 from '../Assets/ImageGridPictures/4.jpg';
import pic5 from '../Assets/ImageGridPictures/5.jpg';
import pic6 from '../Assets/ImageGridPictures/6.jpg';
import pic7 from '../Assets/ImageGridPictures/7.jpg';
import pic8 from '../Assets/ImageGridPictures/8.jpg';
import pic9 from '../Assets/ImageGridPictures/9.jpg';
import pic10 from '../Assets/ImageGridPictures/10.jpg';
import pic11 from '../Assets/ImageGridPictures/11.jpg';
import pic12 from '../Assets/ImageGridPictures/12.jpg';


import { Search, BrandInstagram, BuildingStore, Menu2 } from "tabler-icons-react";

const Photography2 = () => {
  return (
    <>
      <div className="h-screen bg-white">
        {/* NavBar */}

        <div className="w-full h-10 bg-gray-600 text-white flex justify-between lg:px-4 px-2">
          <div id="logo" className="order-2 lg:order-1">Logo</div>
          <div className="order-1 lg:hidden">
            <Menu2 className="cursor-pointer"/>
          </div>
          <div id="enlaces" className="hidden lg:order-2 lg:inline" >
            <ul className="flex justify-between lg:w-96">
              <li className="cursor-pointer">Home</li>
              <li className="cursor-pointer">Portraits</li>
              <li className="cursor-pointer">Landscapes</li>
              <li className="cursor-pointer">About</li>
              <li className="cursor-pointer">Contact</li>
            </ul>
          </div>

          <div id="iconos" className="lg:flex hidden lg:order-3">
            <Search strokeWidth={1} className="cursor-pointer" />
            <BrandInstagram strokeWidth={1} className="cursor-pointer" />
            <BuildingStore strokeWidth={1} className="cursor-pointer" />
          </div>
        </div>

        <div>
          <h1 className="text-3xl">Titulo</h1>
        </div>
        <div>
          <h3 className="text-sm lg:text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut,
            accusantium obcaecati dolore voluptate dolorum voluptatem excepturi
            mollitia labore modi natus?
          </h3>
        </div>

        <div id="contenedor-imagenes">
          <div id="row" className="flex flex-wrap px-1">
            <div id="column" className="lg:flex-25 lg:max-w-25 md:flex-50 md:max-w-50 flex-100 max-w-100 px-1 bg-green-200">
              <img className="mt-2 align-middle w-full rounded-md hover:shadow" alt="imagen de prueba" src={pic9} />
              <img className="mt-2 align-middle w-full rounded-md hover:shadow" alt="imagen de prueba" src={pic1} />
              <img className="mt-2 align-middle w-full rounded-md hover:shadow" alt="imagen de prueba" src={pic6} />
              <img className="mt-2 align-middle w-full rounded-md hover:shadow" alt="imagen de prueba" src={pic10} />
            </div>
            <div id="column" className="lg:flex-25 lg:max-w-25 md:flex-50 md:max-w-50 flex-100 max-w-100 px-1 bg-red-200">
              <img className="mt-2 align-middle w-full rounded-md hover:shadow" alt="imagen de prueba" src={pic1} />
              <img className="mt-2 align-middle w-full rounded-md hover:shadow" alt="imagen de prueba" src={pic2} />
              <img className="mt-2 align-middle w-full rounded-md hover:shadow" alt="imagen de prueba" src={pic8} />
              <img className="mt-2 align-middle w-full rounded-md hover:shadow" alt="imagen de prueba" src={pic4} />
            </div>
            <div id="column" className="lg:flex-25 lg:max-w-25 md:flex-50 md:max-w-50 flex-100 max-w-100 px-1 bg-yellow-200">
              <img className="mt-2 align-middle w-full rounded-md hover:shadow" alt="imagen de prueba" src={pic5} />
              <img className="mt-2 align-middle w-full rounded-md hover:shadow" alt="imagen de prueba" src={pic3} />
              <img className="mt-2 align-middle w-full rounded-md hover:shadow" alt="imagen de prueba" src={pic7} />
              <img className="mt-2 align-middle w-full rounded-md hover:shadow" alt="imagen de prueba" src={pic8} />
            </div>
            <div id="column" className="lg:flex-25 lg:max-w-25 md:flex-50 md:max-w-50 flex-100 max-w-100 px-1 bg-blue-200">
              <img className="mt-2 align-middle w-full rounded-md hover:shadow" alt="imagen de prueba" src={pic3} />
              <img className="mt-2 align-middle w-full rounded-md hover:shadow" alt="imagen de prueba" src={pic2} />
              <img className="mt-2 align-middle w-full rounded-md hover:shadow" alt="imagen de prueba" src={pic8} />
              <img className="mt-2 align-middle w-full rounded-md hover:shadow" alt="imagen de prueba" src={pic4} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Photography2;
