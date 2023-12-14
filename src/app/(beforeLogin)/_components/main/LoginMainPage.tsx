import Image from "next/image";
import Link from "next/link";

import styles from "./loginMainPage.module.css";

import logo from "../../../../../public/buzzy.png";

const LoginMainPage = () => {
  return (
    <div className={styles.main_wrapper}>
      <div className={styles.logo_section}>
        <Image src={logo} alt="logo" width={500} height={500} />
      </div>

      <div className={styles.account_section}>
        <div className={styles.account_section_title}>
          내 고양이한테 일어나는 일
        </div>
        <div className={styles.account_section_description}>
          지금 무슨 일이 일어나고 있나옹?
        </div>

        <div>
          <Link href="/i/flow/signup">
            <button className={styles.signup_button}>계정 만들기</button>
          </Link>
          <p className={styles.signup_button_infomation}>
            가입하시려면 <strong className={styles.bold}>고양이</strong>를
            사랑하셔야 합니다.
          </p>

          <p className={styles.button_infomation}>
            이미 CATwitter에 가입하셨나요?
          </p>
          <Link href="/login">
            <button className={styles.login_button}>로그인</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginMainPage;
