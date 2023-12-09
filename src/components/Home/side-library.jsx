import styles from "./side-library.module.css";
import Card from "../../UI/Card";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import LibContent from "./libContent";
import { Link } from "react-router-dom";

const SideLab = () => {
  return (
    <div className={styles.sideLab}>
      <Card>
        <div className={styles.container}>
          <div className={styles.content}>
            <div className={styles.icon}>
              <span>
                <Link to="/">
                  <HomeIcon />
                </Link>
              </span>
              <Link to="/">Home</Link>
            </div>
            <div className={styles.icon}>
              <SearchIcon />

              <Link to="/search">Search</Link>
            </div>
          </div>
        </div>
      </Card>
      <LibContent />
    </div>
  );
};
export default SideLab;
