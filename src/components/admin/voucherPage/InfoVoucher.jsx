import React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { handleDeleteVoucher } from '../../../redux/adminReducer/actionVoucherThunk';

const InfoVoucher = props => {
    const ItemVoucher = useSelector(_=>_.adminData.itemVoucherSelect)
    const dispatch = useDispatch()
    const handleDelete =()=>{
            dispatch(handleDeleteVoucher(ItemVoucher))
    }
    return (
        <>
       {ItemVoucher&& <section >
        <h4>VIEW DETAIL </h4>
        <h4> No. {ItemVoucher.index}</h4>
        <div>
          <strong>Name : </strong>
          <span>{ItemVoucher.name}</span>{" "}
        </div>
        <div>
          {" "}
          <strong>Expiry : </strong>
          <strong className='day-expiry'><span>{ItemVoucher.day_start} </span> /---/ <span>{ItemVoucher.day_final}</span> </strong>{""}
    
        </div>
        <div>
          {" "}
          <strong>Code : </strong>
          <span>{ItemVoucher.code}</span>
        </div>
        <div>
          {" "}
          <strong>Discount : </strong>
          <span>{ItemVoucher.discount} $</span>
        </div>

        <p>
          Detail : &nbsp;&nbsp;&nbsp;&nbsp; {ItemVoucher.detail}{" "}
        </p>
        <p> </p>

        <button onClick={handleDelete} className="btn btn-danger"> Delete voucher</button>
      </section>}
        </>
    );
};



export default InfoVoucher;