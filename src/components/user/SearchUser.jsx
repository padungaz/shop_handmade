import React from 'react';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ICONSEARCH } from '../../Icon';
import { sagaTyping } from '../../redux/saga/rootSaga';
import { TYPING } from '../../redux/adminReducer/actionTypeAd';
import toast from 'react-hot-toast';
function SearchUser(props) {
    const [value, setValue] = useState("")
    const dispatch = useDispatch()
    const navi = useNavigate()
    const func = (event) => {
        if (event.keyCode === 13) {
            funcs()
        }
    }
    const funcs = () => {
        if(value.length > 0){
            navi({
                pathname: '/search',
                search: `&name_like=${value}`,
            });
            // setValue("") 
    }
    }
    const changeValue =(e)=>{
       setValue(e.target.value) 
      e.target.value.length && dispatch({type:TYPING, payload: ()=>{
        toast.dismiss()
        navi({
        pathname: '/search',
        search: `&name_like=${e.target.value}`,
    })}})
    }
    return (
        <div className='search-header'>
            <input type="text" className="form-control" onKeyDown={func} value={value} onChange={changeValue} placeholder="Search..."></input>
            <span onClick={funcs} className="ICONSEARCH">
                <i className={ICONSEARCH} ></i>
            </span>
        </div>
    );
}

export default SearchUser;