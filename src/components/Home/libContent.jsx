import Card from "../../UI/Card";
import styles from "./libContent.module.css";
import LibraryMusicOutlinedIcon from "@mui/icons-material/LibraryMusicOutlined";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";

const LibContent = () => {
  return (
    <Card>
      <div className={styles.secondContainer}>
        <div className={styles.headContent}>
          <div className={styles.yourLabCont}>
            <div className={styles.lab}>
              <LibraryMusicOutlinedIcon />

              <h3>Your Library</h3>
            </div>

            <AddCircleOutlineOutlinedIcon />
          </div>
        </div>
      </div>
    </Card>
  );
};

export default LibContent;
