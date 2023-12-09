import Grid from "@mui/material/Grid";
import styles from "./MusicItem.module.css";
import Card from "../../UI/Card";
function MusicItem(props) {
  const { title, backgroundColor } = props;
  return (
    <Grid item xs={12} sm={6} md={4} lg={3} xl={1.71}>
      <Card>
        <li
          style={{ backgroundColor: backgroundColor }}
          className={styles.appearance}
        >
          <a href="#">{title}</a>
        </li>
      </Card>
    </Grid>
  );
}

export default MusicItem;
