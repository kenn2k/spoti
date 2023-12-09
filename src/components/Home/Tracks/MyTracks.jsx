import Picture from "../../../assets/picture";
import styles from "./MyTracks.module.css";

function MyTracks() {
  return (
    <button className={styles.favList}>
      <div className={styles.buttonContent}>
        <Picture />
      </div>
    </button>
  );
}

export default MyTracks;
