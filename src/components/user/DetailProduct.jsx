import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ICONSTAR } from '../../Icon';
import { fetProducts } from './../../api/apiMethod';
import { useDispatch, useSelector } from 'react-redux';

import { putCart } from '../../redux/thunk/actionThunk';
import { useNavigate } from 'react-router-dom';
import { listImage } from '../../common/common';
import { useCallback } from 'react';
import toast from 'react-hot-toast';

function DetailProduct(props) {
    const [itemData, setItemData] = useState(Object);
    const [index, setIndex] = useState(0);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const checkCart = useSelector((state) => state.users.cart);
    const locale = localStorage.getItem("infoAccount") ? JSON.parse(localStorage.getItem("infoAccount")) : {}
    const param = useParams()
    const FetProduct = useCallback(() => {
        fetProducts({ page: 1, limit: "", filter: `&id=${param.id}`, sort: "", search: "" })
            .then(res =>
                setItemData(res[0])
            )
    }, [param])

    useEffect(() => {
        FetProduct()
        window.scroll(0, 0)
    }, [param, FetProduct])

    const handleAddToCart = () => {
        if (locale.userName) {
            const checkValid = checkCart.cart ? checkCart.cart.findIndex(_ => _.product_id === itemData.id) : -1
            if (checkValid === -1) {
                dispatch(putCart({
                    data: {
                        product_id: itemData.id,
                        product_percent: itemData.discount,
                        quantity: 1,
                        product_img: itemData.img,
                        product_price: itemData.price,
                        product_name: itemData.name,
                        product_category: itemData.category,
                        product_discount: (itemData.price - parseInt(itemData.discount) * itemData.price / 100)
                    },
                    id: locale.cart_id
                }))
            } else {
                toast.dismiss();
                toast.error("Item already exist in cart!!")
            }
        } else {
            navigate("/login");
        }
    }
    const continueBuy = () => {
        window.scrollTo(0, 500);
        navigate("/");
    }
    return (
        <>
            {itemData && <div className='detail '>
                <div className='detail__photos'>
                    <div className='detail__photos-img' style={{ backgroundImage: `url(${!index ? itemData.img : index})` }}>
                        {/* <img 
                        // src={!index ? itemData.img : index}
                         alt="" className='detail__photos--offical' /> */}
                    </div>
                    <div className='detail__photos--list'>
                        <img onClick={(e) => { setIndex(e.target.src) }} src={itemData.img} alt="" />
                        {listImage.map((item, id) => (
                            <img onClick={(e) => { setIndex(e.target.src) }} src={item} alt="" key={id} className="detail__photo--list--img" />
                        ))}
                    </div>
                </div>
                <div className='detail__info'>
                    <div className='detail__info--main'>
                        <h2>{itemData.name}</h2>
                        <div className='d-flex justify-content-between align-items-center'>
                            <h4>$ {itemData.price}</h4>
                            <p><i className={ICONSTAR}></i> {itemData.rating}/5</p>
                        </div>
                        <p>{itemData.description}</p>
                    </div>
                    <div className='detail__info--status'>
                        <div className='detail__info--status--now'>
                            <p className='detail-stock'>
                                <span>Available:</span>
                                {itemData.status ? "In stock" : "Out of stock"}
                            </p>
                            <p className='detail-discount'>
                                <span>Discount:</span>
                                {itemData.discount}
                            </p>
                            <p className='detail-sold'>
                                <span>Amount Sold:</span>
                                {itemData.sold}
                            </p>
                        </div>
                        <div className='detail__info--status--btn'>
                            {itemData.status ? (<button className='button' onClick={() => handleAddToCart(itemData)}>Add To Cart</button>)
                                : (<button className="button">Order</button>)}
                            <button className='button ms-3 color-btn' onClick={continueBuy}>Shopping</button>
                        </div>
                    </div>
                </div>
            </div>}
        </>
    );
}


export default DetailProduct;