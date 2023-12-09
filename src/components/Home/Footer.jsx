import HomeIcon from "@mui/icons-material/Home";
import LibraryMusicOutlinedIcon from "@mui/icons-material/LibraryMusicOutlined";
import SearchIcon from "@mui/icons-material/Search";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import { Link } from "react-router-dom";
import styles from "./footer.module.css";
import { useDispatch } from "react-redux";
import { userAuthActions } from "../../store/user-slice";
const Footer = () => {
  const dispatchFunc = useDispatch();
  const logOutHandler = () => {
    dispatchFunc(userAuthActions.removeUser());
  };
  return (
    <footer>
      <div className={styles.footer}>
        <div className={styles.controlIcons}>
          <span>
            <Link to="/">
              <HomeIcon style={{ fontSize: "2rem" }} />
            </Link>
          </span>
          <span>
            <Link to="/search" href="">
              <SearchIcon style={{ fontSize: "2rem" }} />
            </Link>
          </span>
          <span>
            <a href="">
              <LibraryMusicOutlinedIcon style={{ fontSize: "2rem" }} />
            </a>
          </span>
          <span>
            <a href="">
              <ExitToAppIcon
                style={{ fontSize: "2rem" }}
                onClick={logOutHandler}
              />
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
