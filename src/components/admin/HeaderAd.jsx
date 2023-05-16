import React from 'react';
import { Account,SearchAd } from '..';

const HeaderAd = ({search}) => {
    return (
        <div className='headerAd'>
            <Account/>
            {search && <SearchAd/>}
        </div>
    );
};



export default HeaderAd;