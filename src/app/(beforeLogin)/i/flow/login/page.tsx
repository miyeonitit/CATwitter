"use client";

import Form from "../../../_components/forms/forms";

import styles from "./loginModal.module.css";

const page = () => {
  return (
    <div>
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
    </div>
  );
};

export default page;
