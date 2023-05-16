import React from 'react';
import { ICONUSER } from '../../Icon';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getProfileUser, updateInfoUser } from '../../redux/thunk/actionThunk';
import { useNavigate } from 'react-router-dom';
import { fetchAccount, SaveCart } from './../../redux/userReducer/action-reduce';
import { fetchOrder } from './../../redux/thunk/actionThunk';
import Product from './Product';

function ProfileUser(props) {
    const navi = useNavigate()
    const logOut = () => {
        window.localStorage.removeItem("infoAccount")
        dispatch(fetchAccount({}))
        navi("/login")
        dispatch(SaveCart([]))
    }
    const [info, setInfo] = useState(false);
    const [form, setForm] = useState(false);
    const [order, setOrder] = useState(false);
    const [step, setStep] = useState(false);

    const dispatch = useDispatch()
    const profileUsernow = useSelector((state) => state.users.listProfile);
    const historyOrder = useSelector((state) => state.users.historyOrder);
    const { acc, profile, payment } = profileUsernow;
    const [valueform, setValueform] = useState({
        fullname: "",
        telephone: "",
        email: "",
        address: ""
    });
    useEffect(() => {
        // console.log(historyOrder[0].list_product_order[0]);
        acc && (Object.hasOwnProperty.call(acc, "profile_id") && dispatch(fetchOrder(acc.profile_id)))

    }, [acc])
    const handleChangevalue = (e) => {
        setValueform({
            ...valueform,
            [e.target.name]: e.target.value
        })
    }
    useEffect(() => {
        if (profile) {

            if (
                valueform.fullname === profile.fullname &&
                valueform.telephone === acc.telephone &&
                valueform.email === profile.email &&
                valueform.address === profile.address
            ) {
                setStep(true)
            } else {
                setStep(false)
            }
        }
    }, [valueform, acc, profile])
    useEffect(() => {
        profile && setValueform({
            fullname: profile.fullname,
            telephone: acc.telephone,
            email: profile.email,
            address: profile.address
        })
    }, [profile, acc])
    const handleCancel = () => {
        setForm(false);
        setInfo(false);
        setValueform({
            fullname: profile.fullname,
            telephone: acc.telephone,
            email: profile.email,
            address: profile.address
        })
    }
    const handleUpdateProfile = (e) => {
        e.preventDefault()
        dispatch(updateInfoUser({ ...profileUsernow, valueform }, () => {
            setForm(false)
            setInfo(false)
            setStep(true)
        }))
    }
    useEffect(() => {
        dispatch(getProfileUser());
    }, [dispatch])
    return (
        <div className='profile'>
            <div className="profile__image">
                <div>
                    <i className={ICONUSER}></i>
                </div>
                <div>
                    {profile && <>
                        <p>{profile.fullname}</p>
                        <p>{profile.address}</p>
                    </>}
                </div>
                <div>
                    <a href='#profile__info'>
                        <button className='btn btn-primary' onClick={(e) => { setOrder(false); setInfo(false); setForm(false) }}>
                            Infomation
                        </button>
                    </a>
                    <a href='#profile__bill'>
                        <button className='btn btn-danger' onClick={(e) => { setOrder(true); setInfo(true); setForm(false) }}>
                            History
                        </button>
                    </a>
                    <button className="btn btn-success" onClick={logOut}>Logout</button>
                </div>
            </div>
            {info ? ("") : (<div id='profile__info' className="profile__info">
                <div>
                    <button className='btn btn-warning' onClick={() => { setInfo(true); setForm(true); }}>Edit</button>
                </div>
                {acc && <div className='profile__info--detail'>
                    <h5> Full Name:         <span>{profile.fullname} </span></h5>
                    <h5> Phone Number:      <span> {acc.telephone}</span></h5>
                    <h5> Shipping Address:  <span> {profile.address}</span></h5>
                    <h5> Email Address:     <span> {profile.email}</span></h5>
                    <h5> Total Orders:      <span> {payment.total}</span></h5>
                </div>}
            </div>)}
            {form ? (<div id='profile__form' className='profile__form'>
                <form action="" >
                    <h4>UPDATE INFORMATION</h4>
                    <div>
                        <label htmlFor="formControlInput" className="form-label">Full Name</label>
                        <input type="text" className="form-control" name="fullname" onChange={handleChangevalue} value={valueform.fullname} />
                    </div>
                    <div>
                        <label htmlFor="formControlInput" className="form-label">Phone</label>
                        <input type="number" className="form-control" name="telephone" onChange={handleChangevalue} value={valueform.telephone} />
                    </div>
                    <div>
                        <label htmlFor="formControlInput" className="form-label">Email</label>
                        <input type="email" className="form-control" name="email" onChange={handleChangevalue} value={valueform.email} />
                    </div>
                    <div>
                        <label htmlFor="formControlInput" className="form-label">Address</label>
                        <input type="text" className="form-control" name="address" onChange={handleChangevalue} value={valueform.address} />
                    </div>
                    <div>
                        <button disabled={step} onClick={handleUpdateProfile} className='btn btn-success'>Update</button>
                        <button className='btn btn-danger' onClick={handleCancel}>Cancel</button>
                    </div>
                </form>
            </div>) : ("")}
            {order ? <div id='profile__bill' className="profile__bill">
                <h3>History Order</h3>
                <div className='list__bill'>
                    {historyOrder && historyOrder.map((_, i) => (
                        <details key={i} >
                            <summary className='profile__bill--item'>
                                <section >
                                    <header>
                                        <p>Fullname:</p>
                                        <p>Phone:</p>
                                        <p>Address:</p>
                                        <p>Purchase date:</p>
                                    </header>
                                    <div>
                                        <p>{_.fullname}</p>
                                        <p>{_.telephone}</p>
                                        <p>{_.address}</p>
                                        <p>{_.time__create}</p>
                                    </div>
                                </section>
                                <section>
                                    <header>
                                        <p>Quantity:</p>
                                        <p>Voucher:</p>
                                        <p>Total:</p>
                                        <p>Completed date:</p>
                                    </header>
                                    <div >
                                        <p>{_.list_product_order && _.list_product_order
                                            .reduce((a, b) => a + b.quantity, 0)}</p>
                                        <p>$ {_.voucher}</p>
                                        <p>$ {_.total_order}</p>
                                        {_.status === true ? (Object.hasOwnProperty.call(_, "time_complete") ? <p>{_.time_complete}</p> : <p>--/--/---</p>) : <p>--/--/---</p>}
                                    </div>
                                </section>
                            </summary>
                            {_.list_product_order && _.list_product_order.map((__, ii) => (
                                <div key={ii} className='profile__bill--detail'>
                                    <section>
                                        <div>
                                            <p>Name Product:</p>
                                            <p>{__.name}</p>
                                        </div>
                                        <div>
                                            <p>Quantity:</p>
                                            <p>{__.quantity}</p>
                                        </div>
                                        <div >
                                            <p>Total:</p>
                                            <p>$ {__.total}</p>
                                        </div>
                                    </section>
                                    <img src={__.img} alt="" style={{ width: "100px", height: "100px" }} />
                                </div>
                            ))}
                        </details>
                    ))}
                </div>


            </div> : ("")}
        </div>
    );
}

export default ProfileUser;
