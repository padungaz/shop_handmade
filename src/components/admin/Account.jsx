import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Account = props => {
    const navi= useNavigate()
    const logOut =()=>{
       localStorage.removeItem("infoAccount")
       navi("/login")
    }
    return (
        <div className='account'>
            <div className='avt'>
            </div>
            <div className='textAcc'>
            <Link to="#">Adminitrator  </Link>
            <span onClick={logOut} to="/login"> / Log out</span>

            </div>
        </div>
    );
};

export default Account;