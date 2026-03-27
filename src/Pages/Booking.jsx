
import { Calendar } from 'lucide-react';
import React, { useState } from 'react';

const Booking = () => {
    const [form, setForm] = useState({
        origin: "Dhaka",
        destination: "Cox's Bazar",
        from: "",
        to: "",
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(form);
        alert("Booking Started 🚀");
    };

    return (
        <div className=' md:flex justify-center items-center  md:mt-38.25 w-11/12 mx-auto px-20 gap-x-8 '>
            <div className='w-1/2 px-3'>
                <h1 className='text-white font-bold text-8xl mb-5'>Cox's bazar</h1>
                <p className='text-white mb-8 gap-y-2'>Cox’s Bazar is a town on the southeast coast of Bangladesh. It <br />
                    ’s known for its very long, sandy beachfront, stretching from <br />
                    Sea Beach in the north to Kolatoli Beach in the south. <br />
                    Aggameda Khyang monastery is home to bronze statues and <br />
                    centuries-old Buddhist manuscripts. South of town, the <br />
                    tropical rainforest of Himchari National Park has waterfalls and <br />
                    many birds. North, sea turtles breed on nearby Sonadia Island.</p>


            </div>
            <div className='w-1/3 '>
                <div className="bg-white rounded-xl p-6 shadow-xl h-90 gap-y-5 w-11/12 mx-auto  ml-auto">
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label className="text-sm text-gray-500">Origin</label>
                            <input
                                type="text"
                                name="origin"
                                value={form.origin}
                                onChange={handleChange}
                                className="w-full mt-1 p-2 bg-gray-100 rounded"
                            />
                        </div>

                        <div>
                            <label className="text-sm text-gray-500">Destination</label>
                            <input
                                type="text"
                                name="destination"
                                value={form.destination}
                                onChange={handleChange}
                                className="w-full mt-1 p-2 bg-gray-100 rounded"
                            />
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="text-sm text-gray-500">From</label>
                                <div className="relative mt-1">
                                    <input
                                        type="date"
                                        name="from"
                                        value={form.from}
                                        onChange={handleChange}
                                        className="w-full p-2 pr-8 bg-gray-100 rounded outline-none"
                                    />
                                    <Calendar
                                        size={16}
                                        className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="text-sm text-gray-500">To</label>
                                <div className="relative mt-1">
                                    <input
                                        type="date"
                                        name="to"
                                        value={form.to}
                                        onChange={handleChange}
                                        className="w-full p-2 pr-8 bg-gray-100 rounded outline-none"
                                    />
                                    <Calendar
                                        size={16}
                                        className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none"
                                    />
                                </div>
                            </div>
                        </div> 

                        <button
                            type="submit"
                            className="w-full bg-yellow-500 py-4 rounded text-black font-semibold hover:bg-yellow-600"
                        >
                            Start Booking
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Booking;