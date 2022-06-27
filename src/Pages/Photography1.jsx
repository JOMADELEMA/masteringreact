import React from 'react'
import { BrandInstagram, BrandFacebook } from 'tabler-icons-react';

const Photography1 = () => {
    return (
        <div className=" bg-fondo-semuc bg-center bg-cover  h-screen">

            <div className='container flex flex-col h-screen justify-between'>

                <div className='text-gray-50 hover:text-gray-500 text-2xl self-end mt-3'>johndoephotography.com</div>
                <div className='self-end'>
                    <div className="text-gray-50  text-5xl text-right font-bold">
                        Jhon Doe
                    </div>
                    <div className="text-gray-50 text-3xl text-right font-semibold">
                        Photographer
                    </div>

                    <div className='flex justify-between mt-3'>
                        <p className='text-gray-50 font-semibold text-xl ml-10 hover:text-gray-600'>
                            Portfolio
                        </p>
                        <p className='text-gray-50 font-semibold text-xl ml-10 cursor-pointer hover:text-gray-600'>
                            Info
                        </p>
                        <p className='text-gray-50 font-semibold text-xl ml-10 cursor-pointer hover:text-gray-600'>
                            About
                        </p>
                        <p className='text-gray-50 font-semibold text-xl ml-10 cursor-pointer hover:text-gray-600'>
                            Contact
                        </p>
                    </div>
                </div>
                <div className='flex self-end mb-3'>
                    <BrandInstagram color='white' className='cursor-pointer'/>
                    <BrandFacebook color='white' className='cursor-pointer'/>


                </div>

            </div>
        </div>
    )
}

export default Photography1