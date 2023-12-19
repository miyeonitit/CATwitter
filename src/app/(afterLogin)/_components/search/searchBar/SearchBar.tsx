import Image from "next/image";

import styles from "./SearchBar.module.css";

import searchIcon from "../../../../../../public/search_icon.png";

const SearchBar = () => {
  return (
    <div className={styles.search_bar_wrapper}>
      <Image src={searchIcon} alt="search_icon" width={16} height={16} />
      <input type="text" className={styles.search_input} placeholder="Search" />
    </div>
  );
};

export default SearchBar;