import React, { useRef } from "react";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { makeCode } from "../../common/common";
import { ICONLEFT } from './../../Icon/index';
import { useNavigate } from 'react-router-dom';
const codee = makeCode();

function Forgot(props) {
  const navi = useNavigate();
  const [forgot, setForgot] = useState(false);
  const refForm = useRef();
  const refReCode = useRef();
  const [valueForm, setValueForm] = useState({
    repter_to: "",
    code: codee,
    reCode: "",
    newPass: "",
    reNewPass: "",
  });
  const serviceID = "service_jcg2mxl";
  const templateID = "template_0kp1doa";
  const KEY = "tqulCHd1msOjsB0IN";
  const checkForgot = (event) => {
    event.preventDefault();


    emailjs.sendForm(serviceID, templateID, refForm.current, KEY).then(
      (res) => {
        setForgot(true);
      },
      (err) => {
        console.log(err);
      }
    );
  };
  const handleRePass = (_) => {
    _.preventDefault()
    console.log(codee);
    console.log(valueForm.reCode);
    if (valueForm.reCode === codee) {
      console.log(true);
    } else {
      refReCode.current.focus()
      refReCode.current.value = ""
    }
  }
  return (
    <div className="modal-forgot">
      {forgot ? (
        ""
      ) : (
        <form ref={refForm} className="forgot" onSubmit={(e) => checkForgot(e)}>
          <div className="forgot__title">
            <p onClick={() => navi(-1)}>
              <i className={ICONLEFT}></i>
            </p>
            <h4>Please enter your email</h4>
          </div>
          <div>
            <input
              type="text"
              name="repter_to"
              id="repter_to"
              placeholder="Your email"
              onChange={(e) =>
                setValueForm({ ...valueForm, [e.target.name]: e.target.value })
              }
              className="form-input"
            />
            <input type="hidden" value={valueForm.code} name="code" id="code" />
          </div>
          <div>
            <button value={"send"}>Send</button>
          </div>
        </form>
      )
      }
      {
        forgot ? (
          <form className="setpass">
            <div className="setpass__title">
              <p onClick={() => setForgot(false)}>
                <i className={ICONLEFT}></i>
              </p>
              <h4>Please enter your new infomation</h4>
            </div>
            <div>
              <input
                type="text"
                name="reCode"
                ref={refReCode}
                placeholder="Your code in email"
                onChange={(e) =>
                  setValueForm({
                    ...valueForm,
                    [e.target.name]: e.target.value,
                  })
                }
                className="form-input"
              />
              <input
                type="password"
                name="newPass"
                placeholder="Set new password "
                onChange={(e) =>
                  setValueForm({
                    ...valueForm,
                    [e.target.name]: e.target.value,
                  })
                }
                className="form-input"
              />
              <input
                type="password"
                name="reNewPass"
                placeholder="Re-enter new password"
                onChange={(e) =>
                  setValueForm({
                    ...valueForm,
                    [e.target.name]: e.target.value,
                  })
                }
                className="form-input"
              />
            </div>
            <div>
              <button onClick={handleRePass}>Save</button>
            </div>
          </form>
        ) : (
          ""
        )
      }
    </div >
  );
}

export default Forgot;
