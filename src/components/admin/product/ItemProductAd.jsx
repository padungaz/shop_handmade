import React from "react";
import { ICONSTAR } from "../../../Icon";

const ItemProductAd = ({ handleSelect, data }) => {
  const { name, price, status, sold, rating, discount, img } = data
  return (
    <div onClick={() => handleSelect(data)} className="list-product-Ad_body_item  viewFirst">
      <div className="product-item-img">
        <img src={img} alt="" />

      </div>
      <section>
        <h6 data-value={name}>Name: <span > {name}</span></h6>
        <h6>Price:<span> $ {price}</span> </h6>
        <h6>Rating:<span>{rating}<i style={{ "--current": `${rating * 2 * 10}%` }} className={ICONSTAR}></i> </span> </h6>
        <h6>Status: <span>{status ? "In Stock" : "Not available"}</span> </h6>
        <h6>Discount:<span>{parseInt(discount)} %</span> </h6>
        <h6>Sold: <span>{sold}</span> </h6>
      </section>
    </div>
  );
};

export default ItemProductAd;
