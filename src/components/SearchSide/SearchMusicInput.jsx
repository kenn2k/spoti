import { useState } from "react";
import styles from "./SearchMusic.module.css";
import SearchIcon from "@mui/icons-material/Search";

function SearchMusicInput({ onChangeInput, value }) {
  const changeHandler = (event) => {
    onChangeInput(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
  };

  return (
    <form className={styles.form} onSubmit={submitHandler}>
      <div className={styles.inputIcon}>
        <span>
          <SearchIcon />
        </span>
        <input
          value={value}
          onChange={changeHandler}
          type="text"
          placeholder="What do you want to listen to?"
        />
      </div>
    </form>
  );
}

export default SearchMusicInput;
