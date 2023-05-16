import React from 'react';
import { ICONFACEBOOK, ICONLINKINED, ICONLOCATION, ICONMAIL, ICONPHONE, ICONPINTEREST, ICONTWITTER } from './../../Icon/index';
import logo from "../../img/logo.png";

const FooterUser = props => {
    return (
        <footer className='footer-page' >
            <div className='main-footer'>
                <div className='contact'>
                    <div className='contact-left'>
                    <p>HandmadeShop &copy; 2022</p> 
                    </div>
                    <div className='contact-right'> 
                        <div className="footer__contact">
                            <p><i className={ICONLOCATION}> </i>36 Ngô Quyền Street, Sơn Trà District, Đà Nẵng city</p>
                            <p><i className={ICONPHONE} ></i>0975327883</p>
                            <p><i className={ICONMAIL}></i>handmadeshopdn22@gmail.com</p>
                        </div>
                        <h3>   FOLLOW US    </h3>
                        <div className='icon-logo'>
                            <i className={ICONFACEBOOK}></i>
                            <i className={ICONTWITTER}></i>
                            <i className={ICONPINTEREST}></i>
                            <i className={ICONLINKINED}></i>
                        </div>
                        <div className='social_contact'>
                            <h4>Subscribe</h4>
                            <div className=' social_input'>
                                <input type="text" placeholder="Your Email"/>
                                <label>"Press Enter"</label>
                            </div>
                        </div>
                    </div>
                </div>
                <img onClick={()=>{window.scroll(0,0)}} src={logo} alt="" />

            </div>
        </footer>
    );
};



export default FooterUser;