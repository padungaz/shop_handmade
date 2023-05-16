import React from "react";
import { useState } from "react";
import { ListVoucher } from "../../components";
import FormCreateVoucher from "../../components/admin/voucherPage/FormCreateVoucher";
import InfoVoucher from "../../components/admin/voucherPage/InfoVoucher";
import { ICONBACK } from "../../Icon";


const VoucherPage = (props) => {
  const [check, setCheck] = useState(true);
  return (
    <div className="body-voucher body-padding-15 ">
      <ListVoucher />
      <div className="controler-voucherpage ">
        <div className="header-controler">
          {check && (
            <button className="btn btn-primary" onClick={() => setCheck(false)}>
              ADD VOUCHER
            </button>
          )}
          {!check && (
            <i onClick={() => setCheck(true)} className={ICONBACK}></i>
          )}
        </div>
        {check && <InfoVoucher/>}
        {!check && <FormCreateVoucher />}
      </div>
    </div>
  );
};

export default VoucherPage;
