import Link from "next/link";

import Form from "../forms/forms";

import styles from "./modal.module.css";

const LoginModal = () => {
  return (
    <div className={styles.modal_outside_wrapper}>
      <div className={styles.modal_wrapper}>
        <Link href="/">
          <div className={styles.close_button}>X</div>
        </Link>

        <Form>
          <Form.Wrapper>
            <Form.Email />
            <Form.Password />
            <Form.ActiveButton buttonText="로그인" />
          </Form.Wrapper>
        </Form>
      </div>
    </div>
  );
};

export default LoginModal;
