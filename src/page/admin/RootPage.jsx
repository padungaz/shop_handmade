import React from "react";
import { useDispatch } from 'react-redux';
import HeaderAd from "../../components/admin/HeaderAd";
import BodyAd from "../../components/admin/BodyAd";
import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { fetchDataProduct, GetInfomationUser, GetListOrder, GetRatingsTotal, GetSlideShow } from "../../redux/adminReducer/actionThunkAd/actionThunk";
import { pathNameAd } from "../../common/pathName";

const  RootPage = (props) => {
  const pageSearch= [pathNameAd.dashboard]
  const dispatch = useDispatch()
  const locale = useLocation()
  useEffect(()=>{
    dispatch(fetchDataProduct());
    dispatch(GetInfomationUser());
    dispatch(GetListOrder("",false))
    dispatch(GetSlideShow())
    dispatch(GetRatingsTotal());
  },[dispatch]);
  return (
    <>
      <HeaderAd search={!pageSearch.includes(locale.pathname) }/>
      <BodyAd>
      <Outlet/>
     </BodyAd>
    </>
  );
};
export default RootPage;
