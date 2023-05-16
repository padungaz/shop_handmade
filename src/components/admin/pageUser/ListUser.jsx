import React ,{useState} from "react";
import { useDispatch } from 'react-redux';
import { useSelector } from "react-redux";
import { selectItemUser } from "../../../redux/adminReducer/adminAction";
import { ModuleUserProfile,ItemUser,ChartFiveUser } from "../../index";

const ListUser = (props) => {
  const [close, setClose] = useState(true);
  const [displayModule, setDisplay] = useState("");
  const listUserData = useSelector((state) => state.adminData.infomationUser);
const dispatch = useDispatch()
  const handleClose =()=>{
      setDisplay("moduleIN");
      setClose(false);
  }
  return (
    <div className="content-listuser">
      <div className="listUser">
        <div className="listUser-header">
          <h3>List User</h3>
        </div>
        <div className="body-listUser">
          {listUserData.acc &&
            listUserData.acc.map((e, i) => ( e.type!=="admin" &&
              <ItemUser
                key={i}
                onClick={(item) => {
                  dispatch(selectItemUser(item))
                  setDisplay("moduleIN");
                  setClose(false);
                }}
                No={i + 1}
                data={{
                  acc: e,
                  profile: listUserData.profile[i],
                  payment: listUserData.payment[i],
                }}
              />
            ))}
        </div>
      </div>
      <div className="empty"></div>
      <ChartFiveUser
        close={close}
        handleClose={handleClose}
      />
      {!close && (
        <ModuleUserProfile
          displayModule={displayModule}
          onClick={() => {
            setDisplay("moduleOUT");
            setTimeout(() => {
              setClose(true);
            }, 100);
          }}
        />
      )}
    </div>
  );
};

export default ListUser;
