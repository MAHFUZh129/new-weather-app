import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../components/shared/Navbar';
import Footer from '../components/shared/Footer';

const MainLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <main className='min-h-[90vh]'>
                <Outlet></Outlet>
            </main>

            <Footer></Footer>
        </div>
    );
};

export default MainLayout;