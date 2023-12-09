import styles from "./side-fav.module.css";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

import MyTracks from "./Tracks/MyTracks";

import useAuth from "../../hooks/use-auth";

import { Link, useHistory } from "react-router-dom";
import Footer from "./Footer";

const SideFav = () => {
  const history = useHistory();

  return (
    <div className={styles.sideFav}>
      <div className={styles.container}>
        <header className={styles.header}>
          <div className={styles.arrows}>
            <button
              onClick={() => {
                history.goBack();
              }}
            >
              <KeyboardArrowLeftIcon style={{ borderRadius: "50%" }} />
            </button>

            <button
              onClick={() => {
                history.go();
              }}
            >
              <KeyboardArrowRightIcon style={{ borderRadius: "50%" }} />
            </button>
          </div>
          <div className={styles.actions}>
            <div className={styles.avatar}>
              <Link to="/profile">
                <img src="https://cdn-icons-png.flaticon.com/512/3607/3607444.png" />
              </Link>
            </div>
          </div>
        </header>
        <div className={styles.page}>
          <h1>Hey!</h1>
        </div>
        <div>
          <MyTracks />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SideFav;
