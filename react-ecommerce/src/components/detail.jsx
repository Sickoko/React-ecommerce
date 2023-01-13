import React from "react";
import information from "../data/home/Seed";
import Helpsec from "./home/Helpsection";
import Header from "../components/home/Header";
import headerData from "../data/home/Header";
import Main from "./detail/main";

export default function Detail() {
  const info = information.map((information) => {
    return (
      <Helpsec
        help={information.help}
        ourstore={information.ourstore}
        track={information.track}
      />
    );
  });
  const header = headerData.map((data) => {
    return <Header logo={data.logo} />;
  });
  
  return (
    <div>
      {info}
      {header}
      <Main/>
    </div>
  );
}
