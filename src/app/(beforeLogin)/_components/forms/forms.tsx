"use client";

import { useState, useContext, createContext } from "react";
import { useRouter } from "next/navigation";

import AfterLoginPage from "../../../(afterLogin)/page";

import styles from "./forms.module.css";

const FormContext = createContext();

const Form = (props) => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const contextValue = {
    email,
    setEmail,
    password,
    setPassword,
  };

  return (
    <FormContext.Provider value={contextValue}>
      {props.children}
    </FormContext.Provider>
  );
};

const Wrapper = ({ children }) => {
  return <div className={styles.form_wrapper}>{children}</div>;
};

const EmailInput = () => {
  const { setEmail } = useContext(FormContext);

  return (
    <div className={styles.value_box}>
      <div className={styles.value_label}>이메일</div>
      <input
        className={styles.value_input}
        type="text"
        onChange={(e) => setEmail(e.target.value)}
        placeholder="abcd@email.com"
      />
    </div>
  );
};

const PasswordInput = () => {
  const { setPassword } = useContext(FormContext);

  return (
    <div className={styles.value_box}>
      <div className={styles.value_label}>비밀번호</div>
      <input
        className={styles.value_input}
        type="password"
        placeholder="********"
        onChange={(e) => setPassword(e.target.value)}
      />
    </div>
  );
};

const ActiveButton = ({ buttonText }) => {
  const router = useRouter();

  const { email, password } = useContext(FormContext);

  const handleEvent = () => {
    const goToPage = buttonText === "로그인" ? "/miyeon" : "";

    return router.replace(goToPage);
  };

  return (
    <button className={styles.active_button} onClick={handleEvent}>
      {buttonText}
    </button>
  );
};

Form.Wrapper = Wrapper;
Form.Email = EmailInput;
Form.Password = PasswordInput;
Form.ActiveButton = ActiveButton;

export default Form;
