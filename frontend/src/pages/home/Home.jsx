import React from "react";
import Desktopnav from "../../components/desktopnav/Desktopnav";
import Headerslider from "../../components/headerSlider/Headerslider";

function Home() {
  return (
    <main className="main__container w-full">
      <div className="main__content w-full md:w-4/5 mx-auto flex gap-5 mt-4 md:mt-8">
        <div className="desktop__nav hidden md:flex w-2/12">
          <Desktopnav />
        </div>
        <div className="header__slider w-full md:w-7/12 !h-32 md:h-76  ">
          <Headerslider />
        </div>
      </div>
    </main>
  );
}

export default Home;
