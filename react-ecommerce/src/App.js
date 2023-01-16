import "./App.css";
import Home from "./components/home";
import Main from "./components/detail/main";
import detailData from "./data/detail/Detail";
import Detail from "./components/detail";
import { Routes, Route } from "react-router-dom";
import headerData from "./data/home/Header";
import Header from "./components/home/Header";
import information from "./data/home/Seed";
import Helpsec from "./components/home/Helpsection";
import footerData from "./data/home/footer";
import Footer from "./components/home/footer";
import Signup from "./components/signup";
function App() {
  const main = detailData.map((data) => {
    return (
      <Main
        vector={data.vector}
        controller={data.controller}
        controllerimg={data.controllerimg}
        icon={data.icon}
        ficon={data.ficon}
        wicon={data.wicon}
      />
    );
  });
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
  const footer = footerData.map((data) => {
    return <Footer icon={data.icon} />;
  });
  return (
    <div className="App">
      <div>
        {info}
        {header}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detail" element={<Detail />} />
        </Routes>
        {footer}
      </div>
    </div>
  );
}

export default App;
