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
} from "../Assets/ImageGridPictures";

import "./Photography2.css";

import {
  Search,
  BrandInstagram,
  BuildingStore,
  Menu2,
  Camera,
} from "tabler-icons-react";

const Photography2 = () => {
  return (
    <>
      <div className="h-screen overflow-auto">
        {/* NavBar */}

        <div className="w-full h-10 flex justify-between lg:px-4 px-2">
          <div id="logo" className="order-2 lg:order-1  self-center lg:w-40">
            <Camera strokeWidth={1.5} size={35} />
          </div>
          <label
            className="order-1 lg:hidden self-center  md:w-40"
            for="collapsedMenu"
          >
            <Menu2 className="cursor-pointer" />
          </label>

          <div id="enlaces" className="hidden lg:order-2 lg:inline self-center">
            <ul className="flex justify-between w-96">
              <li className="cursor-pointer hover:underline hover:underline-offset-2">
                Home
              </li>
              <li className="cursor-pointer hover:underline hover:underline-offset-2">
                Portraits
              </li>
              <li className="cursor-pointer hover:underline hover:underline-offset-2">
                Landscapes
              </li>
              <li className="cursor-pointer hover:underline hover:underline-offset-2">
                About
              </li>
              <li className="cursor-pointer hover:underline hover:underline-offset-2">
                Contact
              </li>
            </ul>
          </div>

          <div
            id="iconos"
            className="lg:flex hidden md:flex md:order-2  lg:order-3 self-center w-40 md:justify-end  lg:justify-end"
          >
            <Search
              strokeWidth={1.2}
              size={25}
              color="black"
              className="cursor-pointer"
            />
            <BrandInstagram
              strokeWidth={1.2}
              size={25}
              color="black"
              className="cursor-pointer ml-3"
            />
            <BuildingStore
              strokeWidth={1.2}
              size={25}
              color="black"
              className="cursor-pointer ml-3"
            />
          </div>
        </div>

        {/* fin Navbar */}

        <input type="checkbox" id="collapsedMenu" className="hidden" />
        <div
          id="enlaces-collapsed"
          className="lg:hidden md:hidden hidden py-2 border-b-gray-400 border-b-2"
        >
          <ul className="flex flex-col justify-between">
            <li className="cursor-pointer text-xl font-semibold text-center hover:bg-gray-100">
              Home
            </li>
            <li className="cursor-pointer text-xl font-semibold text-center hover:bg-gray-100">
              Portraits
            </li>
            <li className="cursor-pointer text-xl font-semibold text-center hover:bg-gray-100">
              Landscapes
            </li>
            <li className="cursor-pointer text-xl font-semibold text-center hover:bg-gray-100">
              About
            </li>
            <li className="cursor-pointer text-xl font-semibold text-center hover:bg-gray-100">
              Contact
            </li>
          </ul>
        </div>

        <div className="my-4">
          <h1 className="text-4xl lg:text-5xl text-center">Titulo</h1>
        </div>
        <div className="lg:py-6 md:py-4 sm:py-3 mb-4">
          <h3 className="lg:text-xl md:text-lg sm:text-md text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut,
            accusantium obcaecati dolore voluptate dolorum voluptatem excepturi
            mollitia labore modi natus? Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Ut, accusantium obcaecati dolore voluptate dolorum
            voluptatem excepturi mollitia labore modi natus?
          </h3>
        </div>

        <div id="contenedor-imagenes">
          <div id="row" className="flex flex-wrap px-1">
            <div
              id="column"
              className="lg:flex-25 lg:max-w-25 md:flex-50 md:max-w-50 flex-100 max-w-100 px-1"
            >
              <img
                className="mt-2 align-middle w-full rounded-md hover:shadow hover:saturate-200"
                alt="imagen de prueba"
                src={pic9}
              />
              <img
                className="mt-2 align-middle w-full rounded-md hover:shadow hover:saturate-200"
                alt="imagen de prueba"
                src={pic1}
              />
              <img
                className="mt-2 align-middle w-full rounded-md hover:shadow hover:saturate-200"
                alt="imagen de prueba"
                src={pic6}
              />
              <img
                className="mt-2 align-middle w-full rounded-md hover:shadow hover:saturate-200"
                alt="imagen de prueba"
                src={pic10}
              />
            </div>
            <div
              id="column"
              className="lg:flex-25 lg:max-w-25 md:flex-50 md:max-w-50 flex-100 max-w-100 px-1"
            >
              <img
                className="mt-2 align-middle w-full rounded-md hover:shadow hover:saturate-200"
                alt="imagen de prueba"
                src={pic1}
              />
              <img
                className="mt-2 align-middle w-full rounded-md hover:shadow hover:saturate-200"
                alt="imagen de prueba"
                src={pic2}
              />
              <img
                className="mt-2 align-middle w-full rounded-md hover:shadow hover:saturate-200"
                alt="imagen de prueba"
                src={pic8}
              />
              <img
                className="mt-2 align-middle w-full rounded-md hover:shadow hover:saturate-200"
                alt="imagen de prueba"
                src={pic4}
              />
            </div>
            <div
              id="column"
              className="lg:flex-25 lg:max-w-25 md:flex-50 md:max-w-50 flex-100 max-w-100 px-1"
            >
              <img
                className="mt-2 align-middle w-full rounded-md hover:shadow hover:saturate-200"
                alt="imagen de prueba"
                src={pic5}
              />
              <img
                className="mt-2 align-middle w-full rounded-md hover:shadow hover:saturate-200"
                alt="imagen de prueba"
                src={pic3}
              />
              <img
                className="mt-2 align-middle w-full rounded-md hover:shadow hover:saturate-200"
                alt="imagen de prueba"
                src={pic7}
              />
              <img
                className="mt-2 align-middle w-full rounded-md hover:shadow hover:saturate-200"
                alt="imagen de prueba"
                src={pic8}
              />
            </div>
            <div
              id="column"
              className="lg:flex-25 lg:max-w-25 md:flex-50 md:max-w-50 flex-100 max-w-100 px-1"
            >
              <img
                className="mt-2 align-middle w-full rounded-md hover:shadow hover:saturate-200"
                alt="imagen de prueba"
                src={pic3}
              />
              <img
                className="mt-2 align-middle w-full rounded-md hover:shadow hover:saturate-200"
                alt="imagen de prueba"
                src={pic2}
              />
              <img
                className="mt-2 align-middle w-full rounded-md hover:shadow hover:saturate-200"
                alt="imagen de prueba"
                src={pic8}
              />
              <img
                className="mt-2 align-middle w-full rounded-md hover:shadow hover:saturate-200"
                alt="imagen de prueba"
                src={pic4}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Photography2;
