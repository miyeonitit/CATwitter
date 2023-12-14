import Form from "../forms/forms";

import styles from "./loginModal.module.css";

const LoginModal = () => {
  return (
    <>
      <div className={styles.modal_wrapper}>
        <div className={styles.close_button}>X</div>

        <Form>
          <Form.Wrapper>
            <Form.Email />
            <Form.Password />
            <Form.LoginButton />
          </Form.Wrapper>
        </Form>
      </div>
    </>
  );
};

export default LoginModal;
