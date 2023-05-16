import React, { useEffect } from 'react';
import { SlideShow, ListProduct } from '../../../components/index.js';
import { useNavigate } from 'react-router-dom';
import { pathNameAd } from '../../../common/pathName.js';
import { useDispatch } from 'react-redux';
import { fetCategory } from '../../../redux/thunk/actionThunk.js';
import { useSelector } from 'react-redux';

const Homepage = props => {
    const navigatePage = localStorage.getItem("infoAccount") ? JSON.parse(localStorage.getItem("infoAccount")) : { type: "" }
    const navi = useNavigate();
    const dispatch = useDispatch();
    useEffect(() => {
        (navigatePage.type === "admin") && navi(pathNameAd.dashboard)
    }, [navigatePage.type, navi])
    useEffect((data) => {
        dispatch(fetCategory(data));
    }, [dispatch])

    return (
        <>
            <SlideShow />
            {/* {listCategory &} */}
            <ListProduct />
        </>
    );
};



export default Homepage;