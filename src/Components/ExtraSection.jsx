import React from 'react';
import cycle from '../assets/images/too-much-orders-contacless-delivery-service-during-quarantine-man-delivers-food-during-isolation-wearing-helmet-face-mask-taking-food-bike-isolated-white-wall-safety-hurrying-up copy 1.png'
import bgCycle from '../assets/images/image 2.jpg'
import { FiArrowRight } from 'react-icons/fi'
const ExtraSection = () => {
    return (
        <div className='shadow-2xl font-serif' >
            <div className="hero min-h-screen ">
                <div className="hero-content flex-col lg:flex-row-reverse" >
                    <div className="text-center lg:text-left bg-cover" style={{ backgroundImage: `url('${bgCycle}')` }} >
                        <img className=' ml-5 delay-500 ease-in-out  animate-spin -translate-x-44  ' src={cycle} alt="" />
                    </div>
                    <div className="card flex-shrink-0 md:w-2/5 w-5/6" >
                        <h1 className="text-5xl font-bold text-lime-600" 
                        style={{ fontFamily: 'merienda' }}>Explore your favourite city’s food.
                        </h1>
                        <p className="py-6">
                            Lorem ipsum dolor sit amet consectetur. Ornare massa nunc nibh tristique. Non ligula tristique ut ut libero sit convallis maecenas. At egestas auctor porta mattis.
                        </p>
                        <button
                            className=" w-44 flex  rounded-full bg-lime-600 py-3 px-12 text-md font-medium text-white transition hover:bg-blue-700"
                        >
                            Explore
                            <FiArrowRight className=' my-auto ml-2 text-xl mt-1'></FiArrowRight>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ExtraSection;