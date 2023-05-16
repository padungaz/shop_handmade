import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from "react";
import { ItemVoucher } from "../../../components/index";
import { GetVoucher } from "../../../redux/adminReducer/actionVoucherThunk";

const ListVoucher = (props) => {
  const listVoucher = useSelector(_=>_.adminData.listVoucher)
  const dispatch = useDispatch()
  useEffect(()=>{
dispatch(GetVoucher())
  },[dispatch])
  return (
    <div className="list-voucher body-padding-15">
      {listVoucher && listVoucher.map((_,i) => (
        <ItemVoucher data={_} index={i+1} key={i} />
      ))}
    </div>
  );
};
export default ListVoucher;