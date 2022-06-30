import React from 'react'
import { Camera } from 'tabler-icons-react';

import pic1 from '../Assets/ImageGridPictures/1.jpg'
import pic2 from '../Assets/ImageGridPictures/2.jpeg'
import pic3 from '../Assets/ImageGridPictures/3.jpeg'
import pic4 from '../Assets/ImageGridPictures/4.jpg'
import pic5 from '../Assets/ImageGridPictures/5.jpg'
import pic6 from '../Assets/ImageGridPictures/6.jpg'
import pic7 from '../Assets/ImageGridPictures/7.jpg'
import pic8 from '../Assets/ImageGridPictures/8.jpg'
import pic9 from '../Assets/ImageGridPictures/9.jpg'
import pic10 from '../Assets/ImageGridPictures/10.jpg'
import pic11 from '../Assets/ImageGridPictures/11.jpg'
import pic12 from '../Assets/ImageGridPictures/12.jpg'

const Photography3 = () => {
    return (
        <>

            <div id="contenedor" className='flex'>

                {/* Sidebar */}
                <div id="sidebar" className='h-screen w-72 flex flex-col shadow-md'>

                    <div id='logo' className='flex justify-center'>
                        <Camera size={150} color='red' strokeWidth={0.5} className="hover:grayscale cursor-pointer" />
                    </div>

                    <div id='enlaces-principales' className=' mt-10 mx-2'>
                        <ul>
                            <li className='font-semibold hover:bg-gray-200 hover:text-black cursor-pointer'>FOTOGRAFIAS</li>
                            <li className='font-semibold hover:bg-gray-200 hover:text-black cursor-pointer'>PELICULAS</li>
                        </ul>
                    </div>
                    <div id='enlaces-secundarios' className=' mt-10 mx-2'>
                        <ul>
                            <li className='font-light hover:bg-gray-200 hover:text-black cursor-pointer'>TIENDA</li>
                            <li className='font-light hover:bg-gray-200 hover:text-black cursor-pointer'>MUSEO</li>
                            <li className='font-light hover:bg-gray-200 hover:text-black cursor-pointer'>BLOG</li>
                            <li className='font-light hover:bg-gray-200 hover:text-black cursor-pointer'>CONTACTO</li>
                        </ul>
                    </div>

                </div>

                {/* Grid */}
                <div id="contenedor-grid" className='w-full h-screen border overflow-auto'>
                    <div id="row" className='flex flex-wrap'>
                        <div id="column " className='lg:flex-25 lg:max-w-25 md:flex-50 md:max-w-50 px-1'>
                            <img src={pic9}  className="mt-2 align-middle w-full  rounded-md" alt="pic1" />
                            <img src={pic1}  className="mt-2 align-middle w-full  rounded-md" alt="pic1" />
                            <img src={pic6}  className="mt-2 align-middle w-full  rounded-md" alt="pic1" />
                            <img src={pic10}  className="mt-2 align-middle w-full  rounded-md" alt="pic1" />
                        </div>
                        <div id="column " className='lg:flex-25 lg:max-w-25 md:flex-50 md:max-w-50 px-1'>
                            <img src={pic1}  className="mt-2 align-middle w-full  rounded-md" alt="pic1" />
                            <img src={pic2}  className="mt-2 align-middle w-full  rounded-md" alt="pic1" />
                            <img src={pic8}  className="mt-2 align-middle w-full  rounded-md" alt="pic1" />
                            <img src={pic4}  className="mt-2 align-middle w-full  rounded-md" alt="pic1" />

                        </div>
                        <div id="column " className='lg:flex-25 lg:max-w-25 md:flex-50 md:max-w-50 px-1'>
                            <img src={pic5}  className="mt-2 align-middle w-full  rounded-md" alt="pic1" />
                            <img src={pic3} className="mt-2 align-middle w-full  rounded-md"  alt="pic1" />
                            <img src={pic7} className="mt-2 align-middle w-full  rounded-md"  alt="pic1" />
                            <img src={pic8} className="mt-2 align-middle w-full  rounded-md"  alt="pic1" />

                        </div>
                        <div id="column " className='lg:flex-25 lg:max-w-25 md:flex-50 md:max-w-50 px-1'>
                            <img src={pic3}  className="mt-2 align-middle w-full  rounded-md" alt="pic1" />
                            <img src={pic2}  className="mt-2 align-middle w-full  rounded-md" alt="pic1" />
                            <img src={pic8}  className="mt-2 align-middle w-full  rounded-md" alt="pic1" />
                            <img src={pic4}  className="mt-2 align-middle w-full  rounded-md" alt="pic1" />

                        </div>

                    </div>
                </div>

            </div>

        </>
    )
}

export default Photography3