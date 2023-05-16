import React from "react";
import { useDispatch } from 'react-redux';
import { useCallback } from "react";
import { useForm } from "react-hook-form";
import {  makeId } from "../../../common/common";
import { ICONREPEAT } from "../../../Icon";
import InputFormVoucher from "./InputFormVoucher";
import { postVoucher } from "../../../redux/adminReducer/actionVoucherThunk";

const FormCreateVoucher = (props) => {
  const {
    register,
    handleSubmit, setValue,
    formState: { errors }
  } = useForm({
    defaultValues: {
      name: "",
      code: "",
      discount: "",
      detail: "",
    },
  });
  const dispatch = useDispatch()
  ///get min day
const minDate = useCallback(()=>{
  const dayNow= new Date(Date.now())
  return `${dayNow.getFullYear()}-${dayNow.getMonth()<9 ?`0${dayNow.getMonth()+1}`:dayNow.getMonth()+1 }-${dayNow.getDate()<10?`0${dayNow.getDate()}`:dayNow.getDate()}`
},[])

  //func format value day
  const releaceDay =(data)=>{
    return `${data.slice(8)}-${data.slice(5,7)}-${data.slice(0,4)}`
  }
  ///make Code for new voucher
  const autoRepeat =()=>{
     setValue("code", makeId(9),{shouldDirty:true})
  }
  ///handle submit form create new voucher
  const onsubmit =(data)=>{
    data.day_start = releaceDay(data.day_start)
    data.day_final = releaceDay(data.day_final)
    dispatch(postVoucher(data))
    setValue("code","")
    setValue("detail","")
    setValue("discount","")
    setValue("name","")
    setValue("day_start","")
    setValue("day_final","")
    
  }
  return (
    <form onSubmit={handleSubmit(onsubmit)} className="formCreateVoucher">
      <h4>CREATE VOUCHER</h4>
      <InputFormVoucher
        name="name"
        register={register}
required={require=true}
      />
      <InputFormVoucher
        name="day_start"
        type={"date"} 
        min={minDate()}
        register={register}
        required={require=true} 
      />
      <InputFormVoucher
        name="day_final"
        type={"date"}
        min={minDate()}
        register={register}
        required={require=true}
      />
      <InputFormVoucher
        name="code"
        register={register}
        required={require=true}
          >
        <button type="button" className="repeat" onClick={autoRepeat}><i className={ICONREPEAT}></i></button>
     </InputFormVoucher>
      <InputFormVoucher
        name="discount"
        register={register}
        type="number"
        required={require=true}
      />
     
      <div className="form-floating">
        <textarea
          {...register("detail")}
          className="form-control"
          cols={24}
          id="detail"
        />{" "}
        <label htmlFor="detail">Detail </label>{" "}
      </div>
      <button className="btn btn-success">CREATE</button>
    </form>
  );
};

export default FormCreateVoucher;
