import About from "@components/client/Home/About";
import HomeDisplay from "@components/client/Home/HomeDisplay";
import Introduction from "@components/client/Home/Introduction";
import Slide from "@components/client/Home/Slide";
import React from "react";

const HomePage = () => {
  return (
    <div>
      <Slide />
      <HomeDisplay topic={"Sản phẩm mới"} />
      <Introduction />
      <HomeDisplay topic={"Sản phẩm bán chạy "} />
      {/* <About /> */}
    </div>
  );
};

export default HomePage;
