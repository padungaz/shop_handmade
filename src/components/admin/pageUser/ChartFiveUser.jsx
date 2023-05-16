import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { ICONUSER } from "../../../Icon";
import { selectItemUser } from "../../../redux/adminReducer/adminAction";

const ItemTopUser = ({ No, seClose, data }) => {
  const dispatch = useDispatch();

  const { profile, payment, acc } = data;
  return (
    <>
      {(payment||acc) && (
        <div
          onClick={() => {
            dispatch(selectItemUser(data));
            seClose();
          }}
          className="item-user-top"
          style={{ "--disdelay": `0.${No}5s` }}
        >
          <div className="avatar">
            <div className="aaa"></div>
            <span className={ICONUSER}></span>
          </div>
          <strong>
            {No + 1}. {profile.fullname ? profile.fullname : acc.user_name}
          </strong>
          <strong>$ {payment.total}</strong>
        </div>
      )}
    </>
  );
};

const ChartFiveUser = ({ handleClose, close }) => {
  const dataRatings = useSelector((state) => state.adminData.ratings);
  const { acc, payment, profile } = dataRatings;
  const isName = (param) => profile.find((el) => el.id === param);
  return (
    <>
      {(close)  && (
        acc && <div className={`top-users ${close ? "moduleIN" : ""}`}>
          <h3>VIP MEMBERS</h3>
          {acc &&
            acc.map((e, i) => ((e.type!=="admin") && 
              <ItemTopUser
                data={{
                  payment: payment[i],
                  profile: isName(e.profile_id),
                  acc: e,
                }}
                key={i}
                seClose={handleClose}
                No={i}
              />
            ))}
        </div>
      )}
    </>
  );
};
export default ChartFiveUser;
