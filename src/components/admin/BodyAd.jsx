import React from 'react';
import SidebarAd from './SidebarAd';

const BodyAd = ({children}) => {
    return (
        <div className='bodyAd'>
            
            <SidebarAd/>
            {children}
        </div>
    );
};



export default BodyAd;