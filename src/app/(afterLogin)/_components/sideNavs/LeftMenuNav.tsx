import Image from "next/image";
import Link from "next/link";

import styles from "./LeftMenuNav.module.css";

import logo from "../../../../../public/nyang_foot.png";
import userProfileImage from "../../../../../public/buzzy_logo.png";

type leftMenuListType = {
  id: string;
  name: string;
  src: string;
};

const LeftMenuNav = () => {
  const leftMenuList: leftMenuListType[] = [
    { id: "Home", name: "Home", src: "" },
    { id: "Explore", name: "Explore", src: "" },
    { id: "Messages", name: "Messages", src: "" },
    { id: "names", name: "names", src: "" },
    { id: "Bookmarks", name: "Bookmarks", src: "" },
    { id: "Profile", name: "Profile", src: "" },
  ];

  return (
    <div className={styles.left_menu_nav_wrapper}>
      <div>
        <Link href="/miyeon">
          <div className={styles.menu_header}>
            <Image src={logo} alt="buzzy_logo" width={30} />
          </div>
        </Link>

        <div>
          <ul>
            {leftMenuList.map((menu) => (
              <li key={menu.id} className={styles.menu_list}>
                ⋆ {menu.name}
              </li>
            ))}
          </ul>

          <div>
            <button className={styles.post_button}>Post</button>
          </div>
        </div>
      </div>

      <div className={styles.user_profile_wrapper}>
        <div className={styles.user_profile_image_box}>
          <Image src={userProfileImage} alt="user_profile_image" width={40} />
        </div>

        <div>
          <div className={styles.user_nickname}>miyeonitit</div>
          <div className={styles.user_account}>@buzzy_nyang</div>
        </div>
      </div>
    </div>
  );
};

export default LeftMenuNav;
