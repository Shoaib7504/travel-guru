import React from 'react';
import travelIcon from "../assets/logo.png"
import { Link } from 'react-router';
const Navbar2 = () => {
    return (
        <div className="flex items-center justify-evenly gap-56 w-11/12 mx-auto mt-5">
            <Link to="/">
                <img className='w-30.25 h-14 ' src={travelIcon} alt="" />
            </Link>


            <div className="flex items-center gap-10">

                <Link className="text-gray-400 text-sm hover:text-yellow-400 transition-colors">Destination</Link>
                <Link className="text-gray-400 text-sm hover:text-yellow-400 transition-colors">Blog</Link>
                <Link className="text-gray-400 text-sm hover:text-yellow-400 transition-colors">Contact</Link>
                <Link className="text-gray-400 text-sm hover:text-yellow-400 transition-colors">News</Link>

                <Link to="/auth/login" className="px-6 py-2 bg-yellow-500 text-gray-900 text-sm font-semibold rounded hover:bg-yellow-400 transition-colors">
                    Login
                </Link>


            </div>




        </div>
    );
};

export default Navbar2;