import React from "react";


const InputFormVoucher = ({ type, name, register, required,children,min}) => {
  return (
    <div className="form-floating">
      <input
        className="form-control"
        autoComplete="off"
        type={type}
        min={min}
        id={name}
        {...register(name, { required })}
        name={name} 
      />{" "}
      {children}
      <label htmlFor={name}>{name} </label>{" "}
    </div>
  );
};

InputFormVoucher.defaultProps = {
  type: "text",
  required: { require: true },
};
export default InputFormVoucher;
