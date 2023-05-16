import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  Header,
  BodyUser,
  FooterUser,
  AccountUser,
  Text,
} from "../../../components/index.js";
import { Outlet, useLocation } from "react-router-dom";
import { checkLogin } from "../../../redux/thunk/actionThunk.js";
const Pageroot = (props) => {
  const dispatch = useDispatch();
  const accLogin = useSelector((state) => state.users.accountLogin);
  const param = useLocation();
  const pathCart = ["/cart", "/payment", "/profileuser"];
  const pathSearch = ["/", "/cart", "/search"];

  useEffect(() => {
    dispatch(checkLogin());
  }, [dispatch]);
  return (
    <>
      <Header
        search={
          (param.pathname.includes("/detail") && true) || (param.pathname.includes("/profileuser") && true) ||
          (pathSearch.includes(param.pathname) ? true : false)
        }
        cart={pathCart.includes(param.pathname) ? false : true}
      >
        {Object.hasOwn(accLogin, "user_name") ? (
          <AccountUser namee={accLogin.user_name} />
        ) : (
          <Text />
        )}{" "}
      </Header>
      <BodyUser>
        <Outlet />
      </BodyUser>
      <FooterUser />
    </>
  );
};

export default Pageroot;
