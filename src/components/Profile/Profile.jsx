import styles from "./Profile.module.css";
import UsersProfile from "./UsersProfile";
function Profile() {
  return (
    <div className={styles.content}>
      <div className={styles.container}>
        <UsersProfile />
      </div>
    </div>
  );
}

export default Profile;
