import React, { use } from 'react';
import travelIcon from "../assets/logo.png"
import { Link } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';
const Navbar2 = () => {
    const { user, Logout } = use(AuthContext)
    const handelLogOut = () => {
        // console.log('user trying to logout');
        Logout()

    }
    return (
        <div className="flex items-center justify-evenly  w-11/12 mx-auto mt-5">
            <Link to="/">
                <img className='w-30.25 h-14 ' src={travelIcon} alt="" />
            </Link>

            <div >{user && user.email}</div>


            <div className="flex items-center gap-10">

                <Link to='/auth/destination' className="text-gray-400 text-sm hover:text-yellow-400 transition-colors">Destination</Link>
                <Link className="text-gray-400 text-sm hover:text-yellow-400 transition-colors">Blog</Link>
                <Link className="text-gray-400 text-sm hover:text-yellow-400 transition-colors">Contact</Link>
                <Link className="text-gray-400 text-sm hover:text-yellow-400 transition-colors">News</Link>
                <Link className='text-gray-200 font-semibold text-lg'>{user ? (user.displayName) || "Showaib" : ''}</Link>


                {

                    user ? (<button onClick={handelLogOut} className="px-6 py-2 bg-yellow-500 text-gray-900 text-sm font-semibold rounded hover:bg-yellow-400 transition-colors">
                        LogOut
                    </button>) : (<Link to="/auth/login" className="px-6 py-2 bg-yellow-500 text-gray-900 text-sm font-semibold rounded hover:bg-yellow-400 transition-colors">
                        Login
                    </Link>)
                }


            </div>




        </div>
    );
};

export default Navbar2;