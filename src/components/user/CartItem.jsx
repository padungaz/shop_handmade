import React from 'react';
import { ICONTRASH } from '../../Icon';
import { useDispatch } from 'react-redux';
import { ChooseItem, DeleteItem, stepFasle } from '../../redux/userReducer/action-reduce';
import { toast } from 'react-hot-toast';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

function CartItem({ goods, handleDeleteItem }) {
    const step = useSelector(state => state.users[goods.product_id])
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(stepFasle({ product_id: goods.product_id, value: true }))
    }, [dispatch, goods.product_id])
    const handleAddStep = (data) => {
        if (step === true) {
            dispatch(ChooseItem(data))
            dispatch(stepFasle({ product_id: goods.product_id, value: false }))
        }
        else {
            toast.dismiss()
            dispatch(stepFasle({ product_id: goods.product_id, value: true }))
            dispatch(DeleteItem(data.product_id));
            // toast("! Already Exist", { style: { background: "orange", color: "#fff", fontWeight: "bolder" } })
        }
    }
    return (
        <li className="list-product__add">
            <div className='list-product__img'>
                <img src={goods.product_img} alt={goods.product_name} />
            </div>
            <div className='list-product__content'>
                <div>
                    <p>{goods.product_name}</p>
                    <p>{goods.product_category}</p>
                </div>
                <div>
                    <p> $ {goods.product_price}</p>
                    <p>$ {goods.product_discount}</p>
                </div>
                <div className='list-product__button'>
                    <input type="checkbox" style={{ width: "20px", height: "20px" }} checked={!step} onChange={() => handleAddStep(goods)} />
                    {/* <button className={`btn ${step === true ? "btn-success" : "btn-danger"}`} onClick={() => { handleAddStep(goods) }}>Add</button> */}
                    <button>
                        <i className={ICONTRASH} onClick={() => handleDeleteItem(goods.product_id)}></i>
                    </button>
                </div>
            </div>
        </li>
    );
}

export default CartItem;