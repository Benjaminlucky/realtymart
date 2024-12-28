import React from "react";
import Desktopnav from "../../components/desktopnav/Desktopnav";

function Home() {
  return (
    <main className="main__container w-full">
      <div className="main__content w-4/5 mx-auto">
        <div className="desktop__nav">
          <Desktopnav />
        </div>
      </div>
    </main>
  );
}

export default Home;
