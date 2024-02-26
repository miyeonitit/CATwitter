import { useRouter, useSearchParams } from "next/navigation";
import cx from "classnames";

import styles from "./SearchFilter.module.css";

const SearchFilter = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const onChangeAll = (): void => {
    const newSearchParams = new URLSearchParams(searchParams);
    newSearchParams.delete("f");
    router.replace(`/search?${newSearchParams.toString()}`);
  };

  const onChangeFollow = (): void => {
    const newSearchParams = new URLSearchParams(searchParams);
    newSearchParams.set("f", "on");
    router.replace(`/search?${newSearchParams.toString()}`);
  };

  return (
    <div>
      <div className={cx(styles.search_filter_wrapper, styles.filter_title)}>
        검색 필터
      </div>

      <div className={cx(styles.search_filter_wrapper, styles.contents_box)}>
        <label className={styles.search_filter_sub_title}>사용자</label>
        <div className={styles.search_filter_contents_box}>
          <div>모든 사용자</div>
          <input type="radio" name="pf" onChange={onChangeAll} defaultChecked />
        </div>
        <div className={styles.search_filter_contents_box}>
          <div>내가 팔로우하는 사람들</div>
          <input type="radio" name="pf" value="on" onChange={onChangeFollow} />
        </div>
      </div>
    </div>
  );
};

export default SearchFilter;
