import React from 'react';

const ItemView = ({children,total}) => {
    return (
        <div className='item-view'>
            {children}
            <h1>{total}</h1>
        </div>
    );
};



export default ItemView;