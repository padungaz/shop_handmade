import React from 'react';

function CartNum({ cartCount }) {
    return (
        <>
            {
                cartCount && <span className='cart-num'>{cartCount}</span>
            }
        </>
    );
}

export default CartNum;