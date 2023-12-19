"use client";

import Image from "next/image";

import { useState, useRef, FormEventHandler } from "react";

import styles from "./TweetPostInput.module.css";

import profileImage from "../../../../../../public/profile_image.png";
import imageFileIcon from "../../.../../../../../../public/image_file_icon.png";

const TweetPostInput = () => {
  const imageRef = useRef<HTMLInputElement>(null);

  const [contentText, setContentText] = useState<string>("");

  const submitContents: FormEventHandler = (e) => {
    e.preventDefault();
  };

  const addImageFile = () => {
    imageRef.current?.click();
  };

  return (
    <form
      className={styles.feed_post_wrapper}
      onSubmit={(e) => submitContents(e)}
    >
      <div className={styles.profile_image_section}>
        <Image src={profileImage} alt="profile_image" width={40} height={40} />
      </div>

      <div className={styles.feed_input_wrapper}>
        <div className={styles.feed_input_box}>
          <textarea
            placeholder="무슨 일이 일어나고 있나요?"
            className={styles.feed_input}
            value={contentText}
            onChange={(e) => setContentText(e.target.value)}
          />
        </div>
        <div className={styles.feed_input_menu_box}>
          <div className={styles.feed_input_left_menu_box}>
            <input
              type="file"
              name="imageFiles"
              multiple
              hidden
              ref={imageRef}
            />
            <Image
              src={imageFileIcon}
              className={styles.menu_icon}
              onClick={() => addImageFile()}
              alt="image_file_icon"
              width={20}
              height={20}
            />
          </div>
          <div>
            <button className={styles.post_button} disabled={!contentText}>
              Post
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default TweetPostInput;
