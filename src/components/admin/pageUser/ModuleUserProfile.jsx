import React, { memo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { ICONBACK, ICONCLOSE, ICONUSER } from '../../../Icon';
import { GetListOrder } from '../../../redux/adminReducer/actionThunkAd/actionThunk';

const ModuleUserProfile = memo(({ displayModule, onClick }) => {
    const [status , setStatus ]=useState(false);
    const listOrder = useSelector((state)=>state.adminData.historyOrder)
    const ItemSelect = useSelector((state)=>state.adminData.ItemDataSelect)
    const dispatch = useDispatch()
    const {acc,profile,payment}=ItemSelect
    useEffect(()=>{
      console.log(listOrder);
    },[dispatch,listOrder])
    useEffect(()=>{
        dispatch(GetListOrder(profile.id))
    },[profile,dispatch]);
    return (
      <div className={`${displayModule} module-profile `}  >
        <div className="header-module">
        <div className="header-module-avt m-3">
          <i className={ICONUSER}></i>
        </div>
        <div className="header-module-title">
          <h6>{profile.fullname ? profile.fullname : "unknown name"}</h6>
          <h6>Email: <span>{profile.email}</span>  </h6>
          <h6>Telephone:  <span>{acc.telephone}</span></h6>
          <h6>Address:  <span> {profile.address}</span></h6>
        </div>
      </div>

      <div className="profileItem">
        <i onClick={() => { onClick() }} className={ICONCLOSE}></i>

        <h6>Total : <span> $ {payment.total} <span style={{ background: "red", borderRadius: "20px", padding: "0 5px" }}> VIP</span></span></h6>
        {/* <h6>Member Type : <span style={{ background: "red", borderRadius: "20px", padding: "0 5px" }}> VIP</span></h6> */}
        <h6>Description :</h6>
        <p>      Lorem, .</p>

      </div>
      <div className="control">
        {/* {
          !status ? <button onClick={() => setStatus(true)} className="btn btn-danger"> Remove user</button> : <div className={`check-delete`}>
            <span>You sure ?</span>
            <button className=" btn btn-primary allow" onClick={() => setStatus(false)}>
              <i className="fa-solid fa-check"></i>
            </button>
            <button className=" btn btn-danger cancer" onClick={() => setStatus(false)}>
              <i className="fa-sharp fa-solid fa-ban"></i>
            </button>
          </div>
        } */}
      </div>
      <details className="history-order">
        <summary> View more history Order</summary>
        <div>
          {listOrder && listOrder.map((_, i) =>
            <div key={i} className="item-order">
              <div className='time'>
              <h6 className="time_making"> {_.time__create}</h6>
              {
                (_.status===true && Object.hasOwnProperty.call(_,"time_complete"))&&<>
                    <i className={ICONBACK}>  </i>
                    <h6 className="time_making"> {_.time_complete }</h6>
                </>
              }
              </div>
              <section>
                {_.list_product_order && _.list_product_order.map((__, i) => <details key={i}>
                  <summary>
                    <h6> <span> {__.name}</span> <span> {__.discountAfter}</span></h6>
                  </summary>
                  <div className='list-item-order'>
                    <div className='item-product'><span>category: </span> <span> {__.category}</span></div>
                    <div className='item-product'><span>quantity: </span> <span> {__.quantity}</span></div>
                    <div className='item-product'><span>discount: </span> <span> {__.percent} %</span></div>
                  </div>
                </details>)}


              </section>      
            </div>
          )}

        </div>
      </details>
    </div>
  )
})
ModuleUserProfile.defaultProps = {
  displayModule: "moduleIN"
}

export default ModuleUserProfile;