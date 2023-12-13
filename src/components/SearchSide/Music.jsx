import Grid from "@mui/material/Grid";
import MusicItem from "./MusicItem";
import styles from "./Music.module.css";
import React, { useState } from "react";
import SearchMusicInput from "./SearchMusicInput";

const Music = React.memo(() => {
  const STORE_ITEMS = [
    {
      id: "1",
      title: "Podcasts",
      backgroundColor: "#006450",
    },

    {
      id: "2",
      title: "Live Events",
      backgroundColor: "#8400e7",
    },

    {
      id: "3",
      title: "Made For You",
      backgroundColor: "#1e3264",
    },

    {
      id: "4",
      title: "New Releases",
      backgroundColor: "#e8115b",
    },

    {
      id: "5",
      title: "Pop",
      backgroundColor: "#148a08",
    },

    {
      id: "6",
      title: "Hip-Hop",
      backgroundColor: "#503750",
    },

    {
      id: "7",
      title: "Rock",
      backgroundColor: "#e91429",
    },
    {
      id: "8",
      title: "Anime",
      backgroundColor: "#e41d63",
    },
    {
      id: "9",
      title: "Soul",
      backgroundColor: "#503750",
    },
    {
      id: "10",
      title: "Instrumental",
      backgroundColor: "#537aa1",
    },
    {
      id: "11",
      title: "Punk",
      backgroundColor: "##8d67ab",
    },
    {
      id: "12",
      title: "K-pop",
      backgroundColor: "#bc5900",
    },
    {
      id: "13",
      title: "Love",
      backgroundColor: "#e91429",
    },
    {
      id: "14",
      title: "Jazz",
      backgroundColor: "#148a08",
    },
  ];
  const [searchCategory, setSearchCategory] = useState("");

  const filterItem = STORE_ITEMS.filter((card) => {
    return (
      card.title.toLowerCase().includes(searchCategory.toLowerCase()) ||
      console.log("there is nothing")
    );
  });

  const inputTypeHandler = (category) => {
    setSearchCategory(category);
  };

  return (
    <section className={styles.products}>
      <SearchMusicInput
        onChangeInput={inputTypeHandler}
        value={searchCategory}
      />
      <ul>
        <Grid container spacing={2}>
          {filterItem.map((item) => (
            <MusicItem
              title={item.title}
              key={item.id}
              backgroundColor={item.backgroundColor}
            />
          ))}
        </Grid>
      </ul>
    </section>
  );
});
Music.displayName = "Music";

export default Music;
