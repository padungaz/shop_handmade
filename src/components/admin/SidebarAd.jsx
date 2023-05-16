import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { pathNameAd } from "../../common/pathName";
import {
    ICONBAG,
    ICONCHART,
    ICONDISCOUNT,
    ICONORDER,
    ICONSETTNG,
    ICONUSER,
    ICONVOUCHER,
} from "../../Icon";
import ButtonSidebar from "./ButtonSidebar";
const SidebarAd = (props) => {  
    const navi = useNavigate()
    const locale = useLocation().pathname
    const page={
        page1:locale===pathNameAd.dashboard,
        page2: locale===pathNameAd.users,
        page3: locale===pathNameAd.product,
        page4: locale===pathNameAd.order,
        page5: locale===pathNameAd.voucher,
        page6: "",
        page7: locale===pathNameAd.profile,
    }
  const handleLogOut =()=>{
        localStorage.removeItem("infoAccount")
        navi("/login")
  }
    return (
        <div className="sidebarAd">
            <ButtonSidebar
                iconName={ICONCHART}
                active={page.page1}
                innerText="Dashboard"
                pathName={pathNameAd.dashboard}
            />
            <ButtonSidebar
                iconName={ICONUSER}
                active={page.page2}
                innerText="User"
                pathName={pathNameAd.users}
            />
            <ButtonSidebar
                iconName={ICONBAG}
                active={page.page3}
                innerText="Product"
                pathName={pathNameAd.product}
            />
            <ButtonSidebar
                iconName={ICONORDER}
                active={page.page4}
                innerText="Order"
                pathName={pathNameAd.order}
            />
            <ButtonSidebar
                iconName={ICONVOUCHER}
                active={page.page5}
                innerText="Voucher"
                pathName={pathNameAd.voucher}
            />
            <ButtonSidebar
                iconName={ICONDISCOUNT}
                active={page.page6}
                innerText="Discount"
                pathName={pathNameAd.discount}
            />
            <details className={`itemSidebar` }>
              <summary><i className={ICONSETTNG}></i> </summary>  
              <ul>
                <li><Link to="/admin/profile">View Profile</Link></li>
                <li onClick={handleLogOut}>Log out</li>
              </ul>
                
                </details>

        </div>
    );
};

export default SidebarAd;
