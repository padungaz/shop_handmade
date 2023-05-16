import React from 'react';
import errorImg from "../../img/error.jpg";
import { ICONCOMMENT } from "../../Icon/index"
function ItemNotFound(props) {
    return (
        <div className='error'>
            <img src={errorImg} alt="" />
            <div className='error__comment'>
                <i className={ICONCOMMENT} style={{ fontSize: "25px" }}></i>
                <p >Sorry, we couldn't find any products that match your selection!!</p>
            </div>
        </div>
    );
}

export default ItemNotFound;