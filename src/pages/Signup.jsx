import React, { useState } from "react";

import styles from "./Signup.module.css";
import { Link } from "react-router-dom";

import { sigingValidate } from "../helper/validate";

function Signup() {
  const [phone, setPhone] = useState("");
  const [pass, setPass] = useState("");
 
  const [errors, setErrors] = useState({phone:"",pass:""});


  const phoneHandler = (e) => {
    setPhone(e.target.value);
  };
  const passHandler = (e) => {
    setPass(e.target.value);
  };
 
  const submitHandler = () => {
    console.log({ phone, pass });
    const result = sigingValidate({ phone, pass });
    setErrors(errors=>result);
    console.log(errors);

  };
  return (
    <div className={styles.container}>
      <img
        style={{
          width: "100px",
          paddingBottom: "20px",
          backgroundColor: "transparent",
        }}
        src="https://s30.picofile.com/file/8473547926/logo.PNG"
        alt="logo"
      />
      <div className={styles.content}>
        <table>
          <tr>
            <th>عضویت</th>
          </tr>
          <tr>
            <td>
              <div className={styles.formContainer}>
                <p>شماره موبایل</p>
                <input
                  className={styles.textInput}
                  type="number"
                  value={phone}
                  onChange={phoneHandler}
                />
                <span className={errors.phone && styles.errorContainer}>{errors.phone}</span>
                <p>گذرواژه</p>
                <input
                  className={styles.textInput}
                  type="password"
                  value={pass}
                  onChange={passHandler}
                />
                <span style={{marginBottom:"30px"}} className={errors.pass && styles.errorContainer}>{errors.pass}</span>
                <div style={{display:"flex",marginBottom:"10px"}}>

                <input type="checkbox" name="remember"></input>
                <label htmlFor="remember">مرا به خاطر بسپار</label>
                </div>
             
               

                <button onClick={submitHandler} className={styles.registerBtn}>
                  عضویت
                </button>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <p className={styles.sinup}>
                هنوز ثبتنام نکرده اید؟
                <Link className={styles.sinupLink} to="/signing">
                  ثبتنام کنید.
                </Link>
              </p>
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
}

export default Signup;