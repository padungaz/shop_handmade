import React from "react";
import { ICONUSER } from "../../../Icon";

const ItemUser = ({ No, onClick, data }) => {
  const linkuser = ""
  const { acc, profile, payment } = data
  return (
    <>
      {data.payment && <div onClick={() => onClick(data)} className="itemUser">
        <p>{No}</p>
        <div className="user-avt">
          {linkuser !== "" ? <img src="" alt="avt" /> : <i className={ICONUSER} ></i>}
        </div>
        <div className="info">
          <p>{profile.fullname && profile.fullname} ({acc.user_name})</p>
          <p>{acc.telephone}</p>
        </div>
        <div className="total-money">
          <h6>Total : <span>$ {payment.total}</span> </h6>
          <h6>Member : <span>VIP</span> </h6>
        </div>
      </div>}
    </>
  );
};

export default ItemUser;
