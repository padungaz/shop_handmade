import React, { memo, useEffect } from "react";
import { useState } from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { ICONCLOSE } from "../../../Icon";
import { PutProductThunk } from "../../../redux/adminReducer/actionThunkAd/actionThunk";


const InputText = memo(({ value, name, handleOnchange, type, edit }) => {
  return (
    <div className="h6">
      <span>{name}: </span>
      <input
        value={type === "number" ? parseFloat(value) : value}
        name={name}
        onChange={(e) => {
          handleOnchange(e);
        }}
        autoComplete="off"
        type={type}
        disabled={edit ? false : true}
      />
    </div>
  );
});

InputText.defaultProps = {
  type: "text",
  edit: false,
};

const InfoProduct = ({ data, handleClose }) => {
  const dispatch = useDispatch()
  const [check, setCheck] = useState(true);
  const [edit, setEdit] = useState(false);
  const [roews, setRow] = useState(1);
  const [hidden, setHidden] = useState("moduleShow");
  const [itemdata, setItemData] = useState({ ...data });
  useEffect(() => {
    setCheck(true);
    setEdit(false);
    setItemData({ ...data });
  }, [data]);

  const handleInput = (e) => {
    if(e.target.type==="textarea"){
      e.target.setAttribute('style', 'height:' + (e.target.scrollHeight) + 'px;')
      e.target.style.height = 'auto';
      e.target.style.height = (e.target.scrollHeight) + 'px';
    }

    setCheck(false);
    setItemData({ ...itemdata, [e.target.name]: e.target.type === "text"||"textarea" ? (e.target.value) : parseFloat(e.target.value) });
  };
  const checkDiffrent = () => {
    let valid = true
    for (const key in data) {
      if (data[key] !== itemdata[key]) {
        valid = false
      }
    }
    return valid
  }
  const handleEditInfoProduct = (pram) => {
    pram.category= pram.category.trim().replace(/\s+/g, ' ').toLowerCase( )

    toast.loading("Creating....");
    dispatch(PutProductThunk(pram))
    setEdit(!edit)
    setCheck(true)
  }
  return (
    <div className={`module-info ${hidden}`}>
      <div className="header-module-info">
        <i onClick={() => {
          setHidden("moduleHidden")
          handleClose()

        }} className={ICONCLOSE}></i>
        <button
          onClick={() => {
            setEdit(!edit);
          }}
        >
          Edit
        </button>
        <button onClick={() => handleEditInfoProduct(itemdata)}
          disabled={check || checkDiffrent()}
        > Save</button>
      </div>
      <form className="Info-product">
        <section>
          <img src={itemdata.img} alt="" />
        </section>
        <section className="info-product-title">
          <div className="h6 fisrt-h6">
              <label htmlFor="name">Name:</label>
              
              <textarea name="name" value={itemdata.name} disabled={!edit} onChange={handleInput}  id="name"></textarea>
          </div>              
          <InputText
            value={itemdata.price}
            name={"price"}
            type="number"
            handleOnchange={handleInput}
            edit={edit}
          />
          <InputText
            value={itemdata.category}
            name={"category"}
            handleOnchange={handleInput}
            edit={edit}
          />

          <InputText
            value={parseInt(itemdata.discount)}
            name={"discount"}
            type={"number"}
            handleOnchange={handleInput}
            edit={edit}
          />
          <div className="h6">
            <span>Status: </span>
            <section>
              <span htmlFor="status">{itemdata.status ? "In Stock" : "Not available"}</span>
              <input
                checked={itemdata.status}
                name={"status"}
                onChange={(e) => {
                  setCheck(false);
                  e.target.checked ? setItemData({ ...itemdata, status: true }) : setItemData({ ...itemdata, status: false });
                }}
                disabled={edit ? false : true}
                type="checkbox"
              />{" "}

            </section>
          </div>
          <InputText
            value={itemdata.rating}
            name={"rating"}
            type="number"
            handleOnchange={handleInput}
          />
          <InputText
            value={parseInt(itemdata.sold)}
            name={"sold"}
            type={"number"}
            handleOnchange={handleInput}
          />
          <h6>
            Description :

          </h6>
          <p>{data.description}</p>
        </section>
      </form>
    </div>
  );
};

export default memo(InfoProduct);
