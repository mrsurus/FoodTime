import React from 'react';
import gas from '../assets/images/image 1.png'
import leap from '../assets/images/—Pngtree—hand-painted noise green leaf element_4054582 1 (1).png'
import leap2 from '../assets/images/—Pngtree—hand-painted noise green leaf element_4054582 1.png'
import { FaSearch } from 'react-icons/fa';
import { BsFillPatchCheckFill } from 'react-icons/bs';

const Banner = () => {
    return (
        <div >
            <div className="hero min-h-screen bg-base-200 py-10">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center relative lg:text-left">
                        <img
                            className='z-0 hover:animate-spin hover:duration-1000 hover:ease-linear  hover:rotate-180 w-56 absolute right-0 -top-20 md:right-0 md:-top-10'
                            src={leap2} alt=""
                        />
                        <img className=' hover:animate-bounce duration-1000 delay-1000 ' src={gas} alt="" />
                        <div className=' absolute top-0 left-1/2 bg-base-100 text-left p-2'>
                            <p className='flex items-center text-orange-600 font-extrabold text-xl justify-around'><BsFillPatchCheckFill></BsFillPatchCheckFill>200K+</p>
                            <p className=' text-sm'>People Delivered</p>
                        </div>
                    </div>
                    <div className="card flex-shrink-0 lg:w-1/2 w-5/6 ">
                        <img className='w-56 -top-36 -ml-40 hover:animate-spin hover:duration-1000 hover:ease-linear  hover:rotate-180 absolute ' src={leap} alt="" />
                        <p
                            className="py-6 text-4xl md:text-6xl text-lime-600 font-semibold w-100 md:w-4/5"
                            style={{ fontFamily: 'merienda' }}>Order food online from your favourite local restaurants.
                        </p>
                        <p className='text-lg'>Freshly made food delivered to your door.</p>
                        <form className="mt-6  ">
                            <div className="relative w-full">
                                <label className="sr-only" > Email </label>
                                <input
                                    className="w-full pl-10 text-lg border border-gray-300 rounded-full bg-gray-100 p-3 pe-32 font-medium"
                                    id="email"
                                    type="text"
                                    placeholder="enter your location"
                                />
                                
                                <button
                                    className="flex absolute end-1 top-1/2 -translate-y-1/2 rounded-full bg-lime-600 px-5 py-3 text-md font-medium text-white transition hover:bg-blue-700"
                                >
                                    <FaSearch className=' my-auto mr-3'></FaSearch>
                                    Search
                                </button>
                                <button
                                    className="flex absolute start-2 top-1/2 -translate-y-1/2 rounded-full bg-orange-600 px-4 py-4 text-md font-medium text-white transition hover:bg-blue-700"
                                >
                        
                                </button>
                            </div>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Banner;