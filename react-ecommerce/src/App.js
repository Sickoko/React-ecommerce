import Helpsec from "./components/Helpsection";
import information from "./data/Seed";
import Carousel from "./components/Carousel";
import carouselData from "./data/Carousel";
import AliceCarousel from "react-alice-carousel";
import Small from "./components/smallcarousel";
import smallData from "./data/smallcarousel";
import Popular from "./components/popular";
import CarouselTopData from "./data/CarouselTop";
import CarouselTop from "./components/Carouseltop";
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
    return <Carousel id={data.id} image={data.image} title={data.title} />;
  });
  const smallcarousel = smallData.map((data) => {
    return <Small title={data.title} count={data.count} image={data.picture} />;
  });
  const popular = popularData.map((data) => {
    return <Popular title={data.title} price={data.price} img={data.img} />;
  });
  const topCarousel = CarouselTopData.map((data) => {
    return (
      <CarouselTop
        heading={data.heading}
        category1={data.category1}
        category2={data.category2}
        category3={data.category3}
        category4={data.category4}
      />
    );
  });

  return (
    <div className="App">
      {info}
      <AliceCarousel
        autoPlay
        autoPlayInterval="3000"
        disableButtonsControls="true"
      >
        {carousel}
      </AliceCarousel>
      <AliceCarousel
        autoPlay
        autoPlayInterval="3000"
        responsive={{
          0: { items: 3 },
        }}
        disableButtonsControls="true"
      >
        {smallcarousel}
      </AliceCarousel>
      {topCarousel}
      <AliceCarousel
        autoPlay
        autoPlayInterval="3000"
        responsive={{
          0: { items: 4 },
        }}
        disableButtonsControls="true"
      >
        {popular}
        {popular}
      </AliceCarousel>
    </div>
  );
}

export default App;
