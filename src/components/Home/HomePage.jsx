import React from "react";
import SideFav from "./side-fav";
import SideLab from "./side-library";
function HomePage() {
  return (
    <React.Fragment>
      <SideLab />
      <SideFav />
    </React.Fragment>
  );
}

export default HomePage;
