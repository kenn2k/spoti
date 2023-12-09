import SearchInput from "../components/SearchSide/SearchInput";
import styles from "./SearchPageFav.module.css";

const SearchPageFav = () => {
  return (
    <div className={styles.content}>
      <div className={styles.container}>
        <SearchInput />
      </div>
    </div>
  );
};

export default SearchPageFav;
