import React, { useState } from "react";

import styles from "./Sining.module.css";
import { Link } from "react-router-dom";

import { formValidate } from "../helper/validate";

function Signing() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("customer");
  const [errors, setErrors] = useState({name:"",lastName:"",phone:"",email:""});

  const phoneHandler = (e) => {
    setPhone(e.target.value);
  };
  const nameHandler = (e) => {
    setName(e.target.value);
  };
  const emailHandler = (e) => {
    setEmail(e.target.value);
  };
  const lastNameHandler = (e) => {
    setLastName(e.target.value);
  };
  const roleHandler = (e) => {
    setRole(e.target.value);
    console.log(e.target.value);
  };
  const submitHandler = () => {
    console.log({ name, phone, lastName, email, role });
    const result = formValidate({ name, phone, lastName, email, role });
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
                <p>نام</p>
                <input
                  className={styles.textInput}
                  type="text"
                  value={name}
                  onChange={nameHandler}
                />
                <span className={errors.name && styles.errorContainer}>{errors.name}</span>
                <p>نام خانوادگی</p>
                <input
                  className={styles.textInput}
                  type="text"
                  value={lastName}
                  onChange={lastNameHandler}
                />
                <span className={errors.lastName && styles.errorContainer}>{errors.lastName}</span>
                <p>ایمیل</p>
                <input
                  className={styles.textInput}
                  type="email"
                  value={email}
                  onChange={emailHandler}
                />
                <span className={errors.email && styles.errorContainer}>{errors.email}</span>
               
                <p>یک رمز به نشانی ایمیل شما فرستاده خواهد شد.</p>
                <div
                  style={{ paddingTop: "10px" }}
                  className={styles.radioContainer}
                >
                  <input
                    type="radio"
                    id="customer"
                    name="role"
                    value="customer"
                    onChange={roleHandler}
                    checked={role === "customer"}
                  />
                  <label className={styles.labelRadio} htmlFor="customer">
                    من یک خریدار هستم.
                  </label>
                </div>
                <div
                  style={{ marginBottom: "20px" }}
                  className={styles.radioContainer}
                >
                  <input
                    type="radio"
                    id="seller"
                    name="role"
                    value="seller"
                    onChange={roleHandler}
                    checked={role === "seller"}
                  />
                  <label className={styles.labelRadio} htmlFor="seller">
                    من یک فروشنده هستم.
                  </label>
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
                قبلا ثبتنام کرده اید؟
                <Link className={styles.sinupLink} to="/signup">
                  وارد شوید.
                </Link>
              </p>
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
}

export default Signing;
