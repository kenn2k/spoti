import styles from "./ProfilePage.module.css";
import SideLab from "../components/Home/side-library";
import Profile from "../components/Profile/Profile";

function ProfilePage() {
  return (
    <div className={styles.content}>
      <div className={styles.container}>
        <SideLab />
        <Profile />
      </div>
    </div>
  );
}

export default ProfilePage;
