import React from 'react'
import {Camera} from 'tabler-icons-react';

const Photography3 = () => {
  return (
    <>

    <div id="contenedor" className='flex'>

    {/* Sidebar */}
        <div id="sidebar" className='h-screen w-72 max-w-50 flex flex-col shadow-md'>

            <div id='logo' className='flex justify-center'>
                <Camera size={150} color='red' strokeWidth={0.5} className="hover:grayscale cursor-pointer"/>            
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
    <div className='w-72 pl-5'>
        <div>
            Aca va el grid
        </div>
    </div>

    </div>

    </>
  )
}

export default Photography3