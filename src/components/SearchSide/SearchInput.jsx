import styles from "../../components/SearchSide/SearchInput.module.css";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

import { Link, useHistory } from "react-router-dom";
import Music from "./Music";
import Footer from "../Home/Footer";
function SearchInput() {
  const history = useHistory();
  const turnBackHandler = () => {
    history.goBack();
  };
  return (
    <div className={styles.sideFav}>
      <div className={styles.container}>
        <header className={styles.header}>
          <div className={styles.arrows}>
            <button onClick={turnBackHandler}>
              <KeyboardArrowLeftIcon style={{ borderRadius: "50%" }} />
            </button>
            <button>
              <KeyboardArrowRightIcon style={{ borderRadius: "50%" }} />
            </button>
            {/* <SearchMusicInput /> */}
          </div>
          <div className={styles.avatar}>
            <Link to="/profile">
              <img src="https://cdn-icons-png.flaticon.com/512/3607/3607444.png" />
            </Link>
          </div>
        </header>
        <div className={styles.page}>
          <h1>Browse all</h1>
        </div>
        <Music />
      </div>
      <Footer />
    </div>
  );
}

export default SearchInput;
