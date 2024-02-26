import { useState, useEffect, ChangeEvent, KeyboardEvent } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

import styles from "./SearchBar.module.css";

import searchIcon from "../../../../../../public/search_icon.png";

const SearchBar = ({ query }: { query: string | null }) => {
  const router = useRouter();

  const [searchQuery, setSearchQuery] = useState<string>("");

  const goToSearchResultPage = (): void => {
    router.replace(`/search?query=${searchQuery}`);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>): void => {
    if (e.key === "Enter") {
      goToSearchResultPage();
    }
  };

  useEffect(() => {
    setSearchQuery(query || "");
  }, [query]);

  return (
    <div className={styles.search_bar_wrapper}>
      <Image src={searchIcon} alt="search_icon" width={16} height={16} />
      <input
        type="text"
        value={searchQuery}
        className={styles.search_input}
        placeholder="Search"
        onChange={(e: ChangeEvent<HTMLInputElement>): void =>
          setSearchQuery(e.target.value)
        }
        onKeyDown={(e: KeyboardEvent<HTMLInputElement>): void =>
          handleKeyDown(e)
        }
      />
    </div>
  );
};

export default SearchBar;
