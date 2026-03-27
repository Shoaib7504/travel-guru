import React from 'react';
import Navbar from '../Components/Navbar';
import { Outlet } from 'react-router';
import Footer from '../Components/Footer';
import bgImg from '../assets/Rectangle 1.png'
import Home from '../Components/Home';

const MainLayout = () => {
    return (
        <>
            <div className="h-screen bg-cover bg-center bg-no-repeat "
                style={{ backgroundImage: `url(${bgImg})` }} >
                <div className="absolute inset-0 bg-black/60">
                    <Navbar></Navbar>
                    <Outlet></Outlet>
                   
                </div>
            </div >
            <div>
                <Footer></Footer>
            </div>

        </>

    );
};

export default MainLayout;