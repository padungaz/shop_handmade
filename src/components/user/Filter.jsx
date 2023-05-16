import React from 'react';
import { ICONFUNNEL } from './../../Icon/index';

function Filter({ handleChangeValueFilter }) {
    return (
        <div className='filter'>
            <select onChange={handleChangeValueFilter} className='filter__price'>
                <option value={""} >Filter</option>
                <option value="&price_gte=10&price_lte=30" >$10 - $30</option>
                <option value="&price_gte=30&price_lte=60" >$30 - $60</option>
                <option value="&price_gte=60&price_lte=100" >$60 -100$</option>
            </select>
            <i className={ICONFUNNEL}></i>
        </div>
    );
}

export default Filter;