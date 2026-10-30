import React from 'react';
import { Outlet } from 'react-router';

const MainLayout = () => {
    return (
        <div>
            <h1>heade</h1>
            <Outlet></Outlet>
            <h1>footer</h1>
            
        </div>
    );
};

export default MainLayout;