import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import { getAccount } from "../../api/apiMethod";
import { makeId } from "../../common/common";
import { ICONLEFT } from '../../Icon';
import { createAccountAsyn } from "../../redux/thunk/actionThunk";
const schema = yup.object().shape({
  user_name: yup.string().required('Please enter your username').min(3),
  address: yup.string().required('Please enter your shipping address'),
  password: yup.string().required('Please enter your password').min(8).max(16),
  re_password: yup.string().required('Please confirm your password').min(8).max(16),
  telephone: yup.string().required('Please enter your telephone').min(9).max(11),
  fullname: yup.string(),
  email: yup.string().email(),

})
const InputItem =({name,type,register,errors})=>{
  return(
    <div className="sign__input">
              <input
                {...register(name)}
                autoComplete="off"
                name={name}
                type={type}

                placeholder={name}
              />
              {errors[name] && <p className="error">{errors[name].message}</p>}
            </div>
  )
}


function SignUpFix(props) {
  const navi = useNavigate();
  const dispatch = useDispatch();
  const { register, handleSubmit, setValue, getValues, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });
  const onSubmit = (data) => {
    checkUsername(() => {
      checkPassword(() => {
        handleCreateAccount(data);
      })
    });
  }
  const handleCreateAccount = (data) => {
    const {
      user_name,
      telephone,
      address,
      fullname,
      password,
      email,
    } = data;
    const itemAccount = {
      id: makeId(6),
      user_name: user_name,
      telephone: telephone,
      password: password,
      type: "",
      profile_id: makeId(5),
      cart_id: makeId(5),
      payment_id: makeId(5),
    };
    const itemProfile = {
      id: itemAccount.profile_id,
      address: address,
      fullname: fullname,
      email: email,
    };
    const cartItem = {
      id: itemAccount.cart_id,
      cart: [],
    };
    const paymentItem = {
      id: itemAccount.payment_id,
      profile_id: itemAccount.profile_id,
      cart_order: [],
      total: 0,
    };
    dispatch(
      createAccountAsyn({
        account: itemAccount,
        profile: itemProfile,
        cartItem: cartItem,
        paymentItem: paymentItem
      })
    );
    setTimeout(() => {
      toast.dismiss();
      toast.success("Signup complete!");
      navi("/login");
    }, 2000);
  };

  const checkUsername = (checkPassword) => {
    getAccount(`?user_name=${getValues("user_name")}`)
      .then((res) => res.json())
      .then((res) => {
        if (res.length !== 0) {
          toast.dismiss();
          toast.error("Please enter user name diffrent again!");
        } else {
          if (checkPassword) {
            checkPassword();
          }
        }
      })
  }
  const checkPassword = (callback) => {
    const pass = getValues("password");
    const re_pass = getValues("re_password");
    if (pass !== re_pass) {
      toast.error("Your password isn't correct!!");
      setValue("password", "", { shouldDirty: true });
      setValue("re_password", "", { shouldDirty: true });
    } else {
      if (callback) {
        callback()
      }
    }
  }
  return (
    <div className="rolemodal">
        <form onSubmit={handleSubmit(onSubmit)} className="sign signInanimation">
          <div className='sign__title'>
            <p onClick={() => navi(-1)}><i className={ICONLEFT}></i></p>
            <h1>Sign Up</h1>
          </div>
          <div className="input--group">
            <InputItem register={register} name={"user_name"} type={"text"} errors={errors}/>
            <InputItem register={register} name={"fullname"} type={"text"} errors={errors}/>            
          </div>
          <div className="input--group">
            <InputItem register={register} name={"telephone"} type={"number"} errors={errors}/>
            <InputItem register={register} name={"email"} type={"text"} errors={errors}/>

          </div>
          <InputItem register={register} name={"address"} type={"text"} errors={errors}/>
          <div className="input--group">
            <InputItem register={register} name={"password"} type={"password"} errors={errors}/>
            <InputItem register={register} name={"re_password"} type={"password"} errors={errors}/>

          </div>
          <div className="sign__btn">
            <button type="submit" >Create Account</button>
          </div>
        </form>
    </div>

  );
}

export default SignUpFix;
