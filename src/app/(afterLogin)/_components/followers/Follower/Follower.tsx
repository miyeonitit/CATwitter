import Image from "next/image";
import { useRouter } from "next/navigation";

import UserType from "@/interfaces/UserType";
import { removeAtEmail } from "@/app/utils/removeAtEmail";

import styles from "./Follower.module.css";

const Follower = ({
  follower,
  session,
}: {
  follower: UserType;
  session: { email: string; image: string; name: string } | null;
}) => {
  const router = useRouter();

  const handleUserFollow = () => {
    if (!session) {
      router.replace("/login");
    }

    alert("팔로우 준비 중");
  };

  return (
    <div className={styles.follower_box_contents}>
      <div className={styles.follower_infomation}>
        <div className={styles.follower_profile_image_box}>
          <Image
            src={follower.image}
            className={styles.user_profile_image}
            alt="profile_image"
            width={40}
            height={40}
          />
        </div>
        <div>
          <div className={styles.follower_words}>{follower.name}</div>
          <div className={styles.follower_tag}>
            @{removeAtEmail(follower.email)}
          </div>
        </div>
      </div>

      <div className={styles.follow_button_box}>
        <button
          className={styles.follow_button}
          onClick={() => handleUserFollow()}
        >
          Follow
        </button>
      </div>
    </div>
  );
};

export default Follower;
