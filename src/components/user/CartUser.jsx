import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { ICONCART } from '../../Icon';
import emptyCart from "../../img/shopping-cart.png";
import { ClearStepPayment, DeleteItem } from '../../redux/userReducer/action-reduce';
import { clearCartUser, deleteItemInCart, getDataCartItem } from './../../redux/thunk/actionThunk';
import CartItem from './CartItem';
import SelectItem from './SelectItem';
import { toast } from 'react-hot-toast';
function CartUser(props) {
    const listProduct = useSelector((state) => state.users);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    useEffect(() => {
        dispatch(getDataCartItem())
        dispatch(ClearStepPayment())
        window.scroll(0, 0)
    }, [dispatch]);
    const handleDeleteItem = (item) => {
        dispatch(deleteItemInCart(item))
        dispatch(DeleteItem(item));
    }
    // console.log(listProduct.stepPayment);
    const checkCart = () => {
        let cart = listProduct.cart.cart || null
        return (cart !== null && cart.length);
    }
    const clearAllItem = () => {
        const temp = { id: listProduct.cart.id, cart: [] }
        dispatch(clearCartUser(temp))
        dispatch(ClearStepPayment())
    }
    const totalAmount = listProduct.stepPayment.reduce((a, e) => a + e.quantity, 0);
    const totalBill = listProduct.stepPayment.reduce((a, e) => a + e.product_discount * e.quantity, 0).toFixed(2);
    const handleSendBill = () => {
        const amountProduct = listProduct.stepPayment.length;
        if (amountProduct === 0) {
            toast.dismiss();
            toast.error("Your list payment is empty!!");
        } else {
            navigate("/payment")
        }
    }
    return (
        <div className='list'>
            <div className='list-wrap'>
                <h4 >Shopping Cart</h4>
                {checkCart() === false || checkCart() === 0 ? (<div className='list-empty d-flex flex-column align-items-center justify-content-between' style={{ minHeight: "500px", margin: "15px 0" }} >
                    <img src={emptyCart} alt="" style={{ width: "220px", height: "220px" }} />
                    <h2 style={{ fontWeight: 400, fontSize: "40px", textAlign: "center" }}>Your cart is currently empty </h2>
                    <p style={{ fontWeight: 400, fontSize: "1.2rem", textAlign: "center" }}>Before proceed to checkout, you must add some products to your cart. You will find alot of interesting products on our "Shop" page.</p>
                    <div>
                        <button className='btn btn-success btn-lg' onClick={() => navigate("/")}><i className={ICONCART} style={{ marginRight: "5px" }}></i> RETURN TO SHOP</button>
                    </div>
                </div>) : (
                    <ul className='list-product'>
                        {listProduct.cart.cart && listProduct.cart.cart.map((goods, i) => (
                            <CartItem key={i} goods={goods} handleDeleteItem={handleDeleteItem} />
                        ))}
                    </ul>
                )}
                {(checkCart() !== 0 && checkCart() !== false) && (<div className='list-wrap--btn'>
                    <button type='button' onClick={clearAllItem}>Clear All</button>
                </div>)}
            </div>
            <div className='list-selection'>
                <h4 >List Payment</h4>
                <div className='list-goods'>
                    {listProduct.stepPayment.length > 0 && listProduct.stepPayment.map((item, index) =>
                        <SelectItem item={item} key={index} />
                    )}
                </div>
                <div className='list-payment'>
                    <div>
                        <p>Amount product: </p>
                        <p>{totalAmount}</p>
                    </div>
                    <div>
                        <p>Total: </p>
                        <p>${totalBill}</p>
                    </div>
                    <div>
                        <button onClick={handleSendBill}>Payment</button>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default CartUser;