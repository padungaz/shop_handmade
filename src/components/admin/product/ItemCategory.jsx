import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { SortProduct } from '../../../common/common';
import ItemProductAd from './ItemProductAd';


const ItemCategory = ({e,setProductSelect}) => {
    const [data , setData]= useState(e.data)
    useEffect(()=>{
        setData(e.data)
    },[e.data])
    const handleSort =(item)=>{
       setData(SortProduct(data,item))
    }
    return (
        <div className="list-allProduct">
        <div className=" d-flex justify-content-between line-title">
          <span>{e.name} <span>({e.data.length})</span> </span>
          <select onChange={(el)=>handleSort(el.target.value)} >
            <option value="nameUp">Name A-Z </option>
            <option value="nameDown">Name Z-A</option>
            <option value="priceUp">price 1-9</option>
            <option value="priceDown">price 9-1</option>
            <option value="ratingUp">rating 1-9</option>
            <option value="ratingDown">rating 9-1</option>
            <option value="soldUp">sold 1-9</option>
            <option value="soldDown">sold 9-1</option>
          </select>
        </div>
        <div className="main-content-list-product ">
          {data.map((item, i) => (
            <ItemProductAd
              handleSelect={() => {
                setProductSelect(item);
              }}
              data={item}
              key={i}
            />
          ))}
        </div>
      </div>
    );
};



export default ItemCategory;