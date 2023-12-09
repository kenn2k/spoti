import styles from "./Home.module.css";

import { Redirect } from "react-router-dom";
import useAuth from "../../hooks/use-auth";
import HomePage from "./HomePage";

function Home() {
  const { isAuth } = useAuth();
  return isAuth ? (
    <div className={styles.home}>
      <div className={styles.container}>
        <HomePage />
      </div>
    </div>
  ) : (
    <Redirect to="/login" />
  );
}

export default Home;
