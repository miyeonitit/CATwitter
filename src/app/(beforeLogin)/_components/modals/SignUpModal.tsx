import { useFormState, useFormStatus } from "react-dom";
import Link from "next/link";

import handlerFormSubmit from "../../_lib/signup";

import Form from "../forms/forms";

import styles from "./modal.module.css";

const SignUpModal = () => {
  const [state, formAction] = useFormState(handlerFormSubmit, {
    message: null,
  });
  const { pending } = useFormStatus();

  const showMessage = (message: string) => {
    switch (message) {
      case "no_id":
        return "아이디를 입력하세요.";
      case "no_password":
        return "비밀번호를 입력하세요.";
      default:
        return "무언가가 잘못되었어요.";
    }
  };

  return (
    <div className={styles.modal_outside_wrapper}>
      <div className={styles.modal_wrapper}>
        <Link href="/">
          <div className={styles.close_button}>X</div>
        </Link>

        <Form action={formAction}>
          <Form.Wrapper>
            <Form.Email />
            <Form.Password />
            <div className={styles.error}>
              {state?.message && showMessage(state?.message)}
            </div>
            <Form.ActiveButton buttonText="회원가입" disabled={pending} />
          </Form.Wrapper>
        </Form>
      </div>
    </div>
  );
};

export default SignUpModal;
