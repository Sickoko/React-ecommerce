import "./App.css";
import Home from "./components/home";
import Main from "./components/detail/main";
import detailData from "./data/detail/Detail";
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
  return (
    <div className="App">
      <Home />
      {main}
    </div>
  );
}

export default App;
