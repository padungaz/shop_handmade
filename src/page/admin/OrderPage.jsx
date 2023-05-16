import React from "react";
import { useState } from "react";
import {  useSelector } from 'react-redux';
import ItemOrder from "../../components/admin/itemOrder/ItemOrder";
const btnOn =(valid)=> ( valid===true&&  {
  backgroundColor : "rgb(63, 76, 149)",
  border : "1px solid black"
})

const OrderPage = (props) => {
    const dataList= useSelector(state=>state.adminData.listOrder)
    const [index , setIndex ]=useState("27%");
   const  [edit,setEdit]=useState({
    order: false,
    payment: false,
   })
   const selectStep =(e)=>{
    e.target.className==="stepB" ?setIndex("77%") : setIndex("26%")
   }
   const handleScroll =(e)=>{
    const Scroll = Math.floor(e.target.scrollTop)
    Scroll>500 ? setIndex("77%"):  setIndex("27%") 

   }

  return (
      <div className="orderPage">
        {/* {list Order UI} */}
        <div  className="navigator"> 
        <span style={{top: index}} className="move"></span>
        <a className="stepA" onClick={selectStep}  href="#list-order" >Order</a>
        <a className="stepB" onClick={selectStep} href="#list-payment" >Payment</a>
        </div>
        <div onScrollCapture={handleScroll} className="body-list">
          <div id="list-order" className="page-list-order">
              <header>
                <h5>List Order</h5>
                <button  className={(edit.order===true)? "btnOn":""} onClick={()=>setEdit({...edit, order:!edit.order })}>Edit</button>
              </header>
              <div className="content_page">
                  {dataList&&dataList.map((_,i)=> _.status===false && <ItemOrder edit={edit.order} delay={i} data={_} key={_.id+10} />)}
              </div>
            </div>
            {/* {list Paymaent UI} */}
            <div  id="list-payment" className="page-list-order">
              <header>
                <h5>List Payment</h5>
                <button className={edit.payment===true? "btnOn":""}  onClick={()=>setEdit({...edit , payment : !edit.payment })}>Edit</button>
              </header>
              <div className="content_page">
              {dataList&&dataList.map((_,i)=> _.status===true && <ItemOrder delay={i} edit={ edit.payment } data={_} status={_.status}  key={_.id} />)}
              </div>
            </div>
        </div>
       
      </div>
  );
};

export default OrderPage;
