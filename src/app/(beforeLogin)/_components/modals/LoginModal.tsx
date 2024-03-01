import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormEvent, FormEventHandler } from "react";
import { useFormStatus } from "react-dom";
import { signIn } from "next-auth/react";

import Form from "../forms/forms";

import styles from "./modal.module.css";

const LoginModal = () => {
  const router = useRouter();
  const { pending } = useFormStatus();

  const LoginPost: FormEventHandler<HTMLFormElement> = async (event) => {
    try {
      event.preventDefault();

      const formEmailValue = event.currentTarget.email.value;
      const formPasswordValue = event.currentTarget.password.value;

      const loginSuccess = await signIn("credentials", {
        username: formEmailValue,
        password: formPasswordValue,
        redirect: false,
      });

      await router.replace("/home");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className={styles.modal_outside_wrapper}>
      <div className={styles.modal_wrapper}>
        <Link href="/">
          <div className={styles.close_button}>X</div>
        </Link>

        <Form action={LoginPost}>
          <Form.Wrapper>
            <Form.Email />
            <Form.Password />
            <Form.ActiveButton buttonText="로그인" disabled={pending} />
          </Form.Wrapper>
        </Form>
      </div>
    </div>
  );
};

export default LoginModal;
