"use client";

import React, { useState, useContext, createContext, FormEvent } from "react";

import styles from "./forms.module.css";

type FormProps = {
  action: React.FormEventHandler<HTMLFormElement>;
  children: React.ReactNode;
};

type FromChildProps = {
  Wrapper: React.FC<WrapperProps>;
  Email: React.FC;
  Password: React.FC;
  ActiveButton: React.FC<ActiveButtonProps>;
};

type WrapperProps = {
  children: React.ReactNode;
};

type ActiveButtonProps = {
  buttonText: string;
  disabled?: boolean;
};

type FormContextType = {
  email: string;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  password: string;
  setPassword: React.Dispatch<React.SetStateAction<string>>;
};

const FormContext = createContext<FormContextType>({
  email: "",
  setEmail: (): void => {},
  password: "",
  setPassword: () => {},
});

const Form: React.FC<FormProps> & FromChildProps = (props) => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const contextValue: FormContextType = {
    email,
    setEmail,
    password,
    setPassword,
  };

  const postFormData = (event: FormEvent<HTMLFormElement>): void => {
    if (!email || !password) {
      alert("아이디나 비밀번호를 확인해 주세요.");
    } else {
      props.action(event);
    }
  };

  return (
    <FormContext.Provider value={contextValue}>
      <form
        onSubmit={(e: FormEvent<HTMLFormElement>) =>
          postFormData(e as FormEvent<HTMLFormElement>)
        }
      >
        {props.children}
      </form>
    </FormContext.Provider>
  );
};

const Wrapper: React.FC<WrapperProps> = ({ children }) => {
  return <div className={styles.form_wrapper}>{children}</div>;
};

const EmailInput: React.FC = () => {
  const { setEmail } = useContext(FormContext);

  return (
    <div className={styles.value_box}>
      <div className={styles.value_label}>이메일</div>
      <input
        id="email"
        name="email"
        className={styles.value_input}
        type="text"
        onChange={(e) => setEmail(e.target.value)}
        placeholder="abcd@email.com"
        required
      />
    </div>
  );
};

const PasswordInput: React.FC = () => {
  const { setPassword } = useContext(FormContext);

  return (
    <div className={styles.value_box}>
      <div className={styles.value_label}>비밀번호</div>
      <input
        id="password"
        name="password"
        className={styles.value_input}
        type="password"
        placeholder="********"
        onChange={(e) => setPassword(e.target.value)}
        required
      />
    </div>
  );
};

// signup, login
const ActiveButton: React.FC<ActiveButtonProps> = ({
  buttonText,
  disabled,
}) => {
  return (
    <button className={styles.active_button} disabled={disabled}>
      {buttonText}
    </button>
  );
};

Form.Wrapper = Wrapper;
Form.Email = EmailInput;
Form.Password = PasswordInput;
Form.ActiveButton = ActiveButton;

export default Form;
