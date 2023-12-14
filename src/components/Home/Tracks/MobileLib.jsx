import Footer from "../Footer";
import MyTracks from "./MyTracks";
import styles from "./mobilelab.module.css";

function MobileLib() {
  return (
    <div className={styles.content}>
      <div className={styles.wrapper}>
        <p>Your Library</p>
        <MyTracks />
        <Footer />
      </div>
    </div>
  );
}

export default MobileLib;
