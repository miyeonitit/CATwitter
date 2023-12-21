import Image from "next/image";

import styles from "./PhotoDetailModal.module.css";

import feedContentsImage from "../../../../../../../../../../public/buzzy_feed_image.png";

const PhotoDetailModal = () => {
  return (
    <div className={styles.contents_photo_detail_modal_wrapper}>
      <div className={styles.contents_photo_detail_modal_box}>
        <Image
          src={feedContentsImage}
          alt="detail_contents_image"
          sizes="100vw"
          style={{ width: "100%", height: "auto" }}
        />
      </div>
    </div>
  );
};

export default PhotoDetailModal;
