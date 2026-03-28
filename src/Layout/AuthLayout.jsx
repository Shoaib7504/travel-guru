import React from 'react';
import { Outlet } from 'react-router';
import Navbar2 from '../Pages/Navbar2';

const AuthLayout = () => {
    return (
        <div>
            <Navbar2></Navbar2>
            <Outlet></Outlet>
        </div>
    );
};

export default AuthLayout;