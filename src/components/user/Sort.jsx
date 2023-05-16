import React from 'react';

function Sort({ handleChangeValueSort }) {

    return (
        <div className='sort'>
            <select className='sort__feature' onChange={handleChangeValueSort} >
                <option value="" >Sort</option>
                <option value="&_sort=price&_order=asc">Price(Lowest)</option>
                <option value="&_sort=price&_order=desc">Price(Highest)</option>
                <option value="&_sort=name&_order=asc">Name(A-Z)</option>
                <option value="&_sort=name&_order=desc">Name(Z-A)</option>
            </select>
        </div>
    );
}

export default Sort;