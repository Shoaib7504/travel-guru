import React from 'react';
import Rectangle1 from "../assets/Rectangle 26.png"
import Rectangle2 from "../assets/Rectangle 27.png"
import Rectangle3 from "../assets/Rectangle 28.png"
import star from "../assets/star_1_.png"
const Destination = () => {
    return (
        <div className='w-11/12 mx-auto'>
            <div className=" mb-6">
                <div className="mt-5 inset-0 flex items-center">
                    <div className="w-full border-t border-gray-300"></div>
                </div>
                <div className='mt-6 space-y-3'>
                    <p>252 stays Apr 13-17 3 guests</p>
                    <h1 className='font-bold text-3xl'>Stay in Cox’s Bazar</h1>
                </div>
                <div className='flex justify-center items-center gap-6 '>
                    <div>
                        <div className='flex gap-6 '>
                            <img className='w-67.5 h-47' src={Rectangle1} alt="" />
                            <div className='space-y-2 mt-3'>
                                <h1 className='text-xl'>Light bright airy stylish apt & safe
                                    peaceful stay</h1>
                                <p>4 guests   2 bedrooms   2 beds   2 baths</p>
                                <p>Wif Air conditioning Kitchen</p>
                                <p>Cancellation fexibility availiable</p>

                                <div className='flex gap-x-5'>
                                    <div className='flex '>
                                        <img className='w-4 h-3.75' src={star} alt="" />
                                        <h1>4.9 (20)</h1>
                                    </div>
                                    <div className='flex gap-x-2'>
                                        <h1>$34/ <span>night</span></h1>
                                        <p>$167 total</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='flex gap-6 mt-5 '>
                            <img className='w-67.5 h-47' src={Rectangle2} alt="" />
                            <div className='space-y-2 mt-3'>
                                <h1 className='text-xl'>Apartment in Lost Panorama</h1>
                                <p>4 guests   2 bedrooms   2 beds   2 baths</p>
                                <p>Wif Air conditioning Kitchen</p>
                                <p>Cancellation fexibility availiable</p>

                                <div className='flex gap-x-5'>
                                    <div className='flex '>
                                        <img className='w-4 h-3.75' src={star} alt="" />
                                        <h1>4.9 (20)</h1>
                                    </div>
                                    <div className='flex gap-x-2'>
                                        <h1>$34/ <span>night</span></h1>
                                        <p>$167 total</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='flex gap-6 mt-5'>
                            <img className='w-67.5 h-47' src={Rectangle3} alt="" />
                            <div className='space-y-2 mt-3'>
                                <h1 className='text-xl'>AR Lounge & Pool (r&r + b&b)</h1>
                                <p>4 guests   2 bedrooms   2 beds   2 baths</p>
                                <p>Wif Air conditioning Kitchen</p>
                                <p>Cancellation fexibility availiable</p>

                                <div className='flex gap-x-5'>
                                    <div className='flex '>
                                        <img className='w-4 h-3.75' src={star} alt="" />
                                        <h1>4.9 (20)</h1>
                                    </div>
                                    <div className='flex gap-x-2'>
                                        <h1>$34/ <span>night</span></h1>
                                        <p>$167 total</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Destination;