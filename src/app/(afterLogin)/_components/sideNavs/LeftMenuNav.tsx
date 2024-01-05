import Image from "next/image";
import Link from "next/link";
import { useRouter, useSelectedLayoutSegment } from "next/navigation";
import { signOut, useSession } from "next-auth/react";

import styles from "./LeftMenuNav.module.css";

import logo from "../../../../../public/nyang_foot.png";
import userProfileImage from "../../../../../public/buzzy_logo.png";

type leftMenuListType = {
  id: string;
  name: string;
  src: string;
};

const LeftMenuNav = () => {
  const router = useRouter();
  const { data } = useSession();
  const segment: string | null = useSelectedLayoutSegment();

  const leftMenuList: leftMenuListType[] = [
    { id: "Home", name: "Home", src: "/home" },
    { id: "Explore", name: "Explore", src: "/explore" },
    { id: "Messages", name: "Messages", src: "/messages" },
    { id: "Profile", name: "Profile", src: "/profile" },
  ];

  const handleLogout = () => {
    signOut({ redirect: false }).then(() => {
      router.replace("/");
    });
  };

  return (
    <div className={styles.left_menu_nav_wrapper}>
      <div>
        <Link href="/home">
          <div className={styles.menu_header}>
            <Image src={logo} alt="buzzy_logo" width={30} />
          </div>
        </Link>

        <div>
          <ul>
            {leftMenuList.map((menu) => (
              <Link href={menu.src} key={menu.id}>
                <li
                  className={
                    segment === menu.src.split("/")[1]
                      ? styles.menu_list_bold
                      : styles.menu_list
                  }
                >
                  ⋆ {menu.name}
                </li>
              </Link>
            ))}
          </ul>

          <div>
            <Link href="/compose/tweet">
              <button className={styles.post_button}>Post</button>
            </Link>
          </div>
        </div>
      </div>

      {data ? (
        <div
          className={styles.user_profile_wrapper}
          onClick={() => handleLogout()}
        >
          <div className={styles.user_profile_image_box}>
            <Image
              src={data?.user?.image || userProfileImage}
              alt="user_profile_image"
              width={40}
              height={40}
            />
          </div>

          <div>
            <div className={styles.user_nickname}>{data?.user?.name}</div>
            <div className={styles.user_account}>{data?.user?.email}</div>
          </div>
        </div>
      ) : (
        <div
          className={styles.user_profile_wrapper}
          onClick={() => router.replace("/")}
        >
          <div className={styles.user_profile_image_box}>
            <Image src={userProfileImage} alt="user_profile_image" width={40} />
          </div>

          <div>
            <div className={styles.user_nickname}>로그인을 해보세요!</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LeftMenuNav;
