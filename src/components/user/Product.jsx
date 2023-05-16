import React from 'react';
import { ICONSTAR } from '../../Icon';

function Product(props) {
    const { name, img, price, discount, sold, rating, category } = props;
    return (
        <div className="product">
            <img src={img} className="product__img" alt="product-top" />
            {discount ? (<span>-{parseInt(discount)}%</span>) : ("")}
            <div className="product__body">
                <div className='product-info'>
                    <div className='d-flex flex-column'>
                        <h5 className="product-info__title">{name}</h5>
                        <h6 className="product-info__title">{category}</h6>
                    </div>
                    {discount ? <section className='product-info__discount-price d-flex flex-column'>
                        <p className="product-info__price">$ {(price - price * parseInt(discount) / 100).toFixed(1)}</p> <p className='product-info__sale'>$ {price}</p>
                    </section> : <p className="product-info__price">$ {price}</p>}
                </div>
                <div className='product-rate'>
                    <p className="product-rate__text">
                        <i className={ICONSTAR}></i>
                        <strong>{rating}/5</strong>
                    </p>
                    <p className='product-rate__amount'>{sold} Sold</p>
                </div>
                <div className='product-btn'>
                    <button type="submit" className='product-btn__add'>Details</button>
                </div>
            </div>
        </div>
    );
}

export default Product;