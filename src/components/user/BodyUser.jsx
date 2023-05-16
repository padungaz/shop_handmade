import React from 'react';
import { SideBar } from './../../components/index.js';


const BodyUser = ({ children }) => {
    return (
        <div className='body-user'>
            <SideBar />
            <div className='main-content'>
                {children}
            </div>
        </div>
    );
};



export default BodyUser;