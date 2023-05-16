import React from 'react';
import { ICONMINUS, ICONPLUS, ICONTRASH } from '../../Icon';
import { useDispatch } from 'react-redux';
import { ChangeQuantityItem, DeleteItem, stepFasle } from '../../redux/userReducer/action-reduce';

function SelectItem({ item }) {
    const dispatch = useDispatch();
    const handleQuantity = (e) => {
        const temp = e.target.dataset.value;
        dispatch(ChangeQuantityItem({ item: item, temp: temp }))
    }
    const DeleteSelectItem = (e) => {
        dispatch(DeleteItem(e.product_id));
        dispatch(stepFasle({ product_id: item.product_id, value: true }))
    }
    return (
        <div className='list-goods__item'>
            <img src={item.product_img} alt="" />
            <div className='list-goods__item--info'>
                <div>
                    <p>{item.product_name}</p>
                    <p>{item.product_category}</p>
                </div>
                <p>${item.product_discount}</p>
            </div>
            <div className='list-goods__item--btn'>
                <div>
                    <i className={ICONMINUS} data-value="minus" onClick={handleQuantity}></i>
                    <p>{item.quantity}</p>
                    <i className={ICONPLUS} data-value="plus" onClick={handleQuantity}></i>
                </div>
                <button className='btn' onClick={() => DeleteSelectItem(item)}><i className={ICONTRASH} /></button>
            </div>
        </div>
    );
}

export default SelectItem;