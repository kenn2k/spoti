import styles from "./UsersProfile.module.css";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

import { useHistory, Link } from "react-router-dom";
import useAuth from "../../hooks/use-auth";
import TopArtists from "./TopArtists";
import Footer from "../Home/Footer";
function UsersProfile() {
  const { name } = useAuth();

  const history = useHistory();
  const turnBackHandler = () => {
    history.goBack();
  };
  return (
    <div className={styles.content}>
      <div className={styles.container}>
        <header className={styles.header}>
          <div className={styles.arrows}>
            <button onClick={turnBackHandler}>
              <KeyboardArrowLeftIcon style={{ borderRadius: "50%" }} />
            </button>
            <button>
              <KeyboardArrowRightIcon style={{ borderRadius: "50%" }} />
            </button>
          </div>
          <div className={styles.avatar}>
            <Link to="/profile">
              <img src="https://cdn-icons-png.flaticon.com/512/3607/3607444.png" />
            </Link>
          </div>
        </header>
        <div className={styles.profileContainer}>
          <div className={styles.avatarPic}>
            <img src="https://cdn-icons-png.flaticon.com/512/3607/3607444.png" />
          </div>
          <div className={styles.title}>{name}</div>
        </div>
        <TopArtists />
      </div>
      <Footer />
    </div>
  );
}

export default UsersProfile;
