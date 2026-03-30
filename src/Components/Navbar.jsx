import { Map, Search } from 'lucide';
import React, { use } from 'react';
import travelIcon from "../assets/logo.png"
import { Link } from 'react-router';
import { FaSearch } from 'react-icons/fa';
import { AuthContext } from '../Provider/AuthProvider';
const Navbar = () => {
    const { user, Logout } = use(AuthContext)
    const handelLogOut = () => {
        // console.log('user trying to logout');
        Logout()

    }
    return (
        <div className="flex items-center justify-evenly w-11/12 mx-auto mt-5">
            <Link to="/">
                <img className='w-45 h-15 invert' src={travelIcon} alt="" />
            </Link>


            <div className="relative">
                <input type="search"
                    placeholder="Search your Destination..."
                    className="pl-10 pr-4 py-2 bg-transparent text-white text-sm rounded-md border border-gray-700 w-92.5"
                    name="" id="" />
                <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>

            <div className="flex items-center gap-10">

                <Link className="text-gray-400 text-sm hover:text-yellow-400 transition-colors">Destination</Link>
                <Link className="text-gray-400 text-sm hover:text-yellow-400 transition-colors">Blog</Link>
                <Link className="text-gray-400 text-sm hover:text-yellow-400 transition-colors">Contact</Link>
                <Link className="text-gray-400 text-sm hover:text-yellow-400 transition-colors">News</Link>
                <Link className='text-gray-200 font-semibold text-lg'>{user ? (user.displayName)||"Showaib" : ''}</Link>
                {

                    user ? (<button onClick={handelLogOut} className="px-6 py-2 cursor-pointer bg-yellow-500 text-gray-900 text-sm font-semibold rounded hover:bg-yellow-400 transition-colors">
                        Logout
                    </button>) : (<Link to="/auth/login" className="px-6 py-2 bg-yellow-500 text-gray-900 text-sm font-semibold rounded hover:bg-yellow-400 transition-colors">
                        Login
                    </Link>)
                }


            </div>




        </div>

    );
};

export default Navbar;