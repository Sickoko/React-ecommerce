import Helpsec from "./components/Helpsection";
import { Navbar, Row } from "react-bootstrap";
import information from "./data/Seed";
import Carousel from "./components/Carousel";
import carouselData from "./data/Carousel";
import AliceCarousel from "react-alice-carousel";
import Small from "./components/smallcarousel";
import smallData from "./data/smallcarousel";
import Popular from "./components/popular";

import "./App.css";
import popularData from "./data/popular";

function App() {
  const info = information.map((information) => {
    return (
      <Helpsec
        help={information.help}
        ourstore={information.ourstore}
        track={information.track}
        logo={information.logo}
      />
    );
  });
  const carousel = carouselData.map((data) => {
    return <Carousel image={data.image} title={data.title} />;
  });
  const smallcarousel = smallData.map((data) => {
    return <Small title={data.title} count={data.count} image={data.picture} />;
  });
  const popular = popularData.map((data) => {
    return <Popular title={data.title} price={data.price} img={data.img} />;
  });

  return (
    <div className="App">
      {info}
      <AliceCarousel autoPlay autoPlayInterval="3000">
        {carousel}
      </AliceCarousel>
      <AliceCarousel
        autoPlay
        autoPlayInterval="3000"
        responsive={{
          0: { items: 3 },
        }}
      >
        {smallcarousel}
      </AliceCarousel>
      <AliceCarousel
        autoPlay
        autoPlayInterval="3000"
        responsive={{
          0: { items: 4 },
          
        }}
      >
        {popular}
      </AliceCarousel>
    </div>
  );
}

export default App;
