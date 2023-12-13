import SideLab from "../components/Home/side-library";
import styles from "../pages/SearchPage.module.css";
import SearchPageFav from "./SearchPageFav";

const SearchPage = () => {
  return (
    <div className={styles.content}>
      <div className={styles.container}>
        <SideLab />
        <SearchPageFav />
      </div>
    </div>
  );
};
SearchPage.displayName = "SearchPage";

export default SearchPage;
