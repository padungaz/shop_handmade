import React, { useEffect, useState } from 'react';
import { useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { pathNameAd } from '../../common/pathName';
import {  ICONCLOSE } from '../../Icon';
const SearchAd = props => {
    const locale = useLocation().pathname
    const [data , setData ]=useState([]);
useEffect(() => {
    setData([])
    setTyping("")
}, [locale]);
const [typing , setTyping ]=useState("");

const ALL_DATA = useSelector(_=>_.adminData)
const handleSearch =()=> {
    let outData=[]
    const validTyping =(data)=>{
        if(typing.length){
            data.forEach(_=>{
                  for (const key in _) {
                      if(
                        !key.includes("id")&&
                        !key.includes("img")&&
                        !key.includes("password")&&
                        !key.includes("type")&&
                        typeof _[key]!=="array" &&
                        typeof _[key]!=="object") {
                          const temp= _[key].toString().toLowerCase()
                         if(temp.includes(typing.toLowerCase())){
                            outData.push(_)
                            return
                         } 
                      }
                  }
              })
          }
    }
    switch (locale) {
    case pathNameAd.users :        
        const dataUser =[]
        ALL_DATA.infomationUser.acc.forEach((_,i)=>
        {
            dataUser.push({..._,...ALL_DATA.infomationUser.profile[i],...ALL_DATA.infomationUser.payment[i]})
        })
            validTyping(dataUser)
        return outData;
        case pathNameAd.product:
            const dataProduct= ALL_DATA.dataProducts
            validTyping(dataProduct)
        return outData
        case pathNameAd.order:
            const dataOrder = ALL_DATA.listOrder
            validTyping(dataOrder)
        return outData
        case pathNameAd.voucher:
            const dataVoucher = ALL_DATA.listVoucher
            validTyping(dataVoucher)
        return outData
        default:
            return  [];
        }
}
const divilaKey = useCallback((object)=>{
     let arr = []
   for (const key in object) {
    if (Object.hasOwnProperty.call(object, key)) {        
        arr.push(key)
    }
   }
   return arr
},[data])
const turnOffSearch =()=>{
   setData([])
   setTyping("")
}
    return (
    <>
        <div className='searchBox'>
        { (data.length!==0 ||typing.length!== 0 )&& <button onClick={turnOffSearch} className='turnOff-search'><i className={ICONCLOSE}></i></button>}
            <input onKeyDown={(e)=>{
                    if(e.keyCode===13){
                        setData(handleSearch())
                    }
                    if(e.keyCode===27){
                        setData([])
                        setTyping("")
                    }
            }} type="text" value={typing} onChange={(e)=>{
                setTyping(e.target.value)
            if(e.target.value==""){
                setData([])
            }
            }} placeholder='Search...' />
            <button onClick={()=>{setData(handleSearch())
            }}>
              <i className="fa-solid fa-magnifying-glass"></i>  
            </button>
        </div>
           {(data.length!==0 ||typing.length!== 0 )&& <div className={`over-search`}> 
           {data.length===0 &&  <p> No thing for resuls!</p> }
                    {data.map((_,i)=>
                      <div key={i} className='item-search'>
                        {
                        divilaKey(_).map((__,ii)=>{
                               if(
                               !__.includes("id")&&
                               !__.includes("type")&&
                               !__.includes("password")&&
                               typeof _[__] !== "object" &&
                               typeof _[__] !== "array") 
                               return <p key={ii}>
                                <span >{(__).replace(/[_]+/g||"-", ' ')}</span>
                                :<span > {(_[__].toString())}</span> 
                                </p>
                              
                            })
                        }                        
                        
                      </div>  
                    )}
            </div>
            }
        </>
    );
};



export default SearchAd;