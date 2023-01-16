import Helpsec from "./home/Helpsection";
import information from "../data/home/Seed";
import Carousel from "./home/Carousel";
import carouselData from "../data/home/Carousel";
import AliceCarousel from "react-alice-carousel";
import Small from "./home/smallcarousel";
import smallData from "../data/home/smallcarousel";
import Popular from "./home/popular";
import CarouselTopData from "../data/home/CarouselTop";
import CarouselTop from "./home/Carouseltop";
import SaleSection from "./home/salesection";
import saleData from "../data/home/salesection";
import popularData from "../data/home/popular";
import additionalData from "../data/home/additional";
import Additional from "./home/additional";
import BigCards from "./home/bigcard";
import bigData from "../data/home/bigcard";
import Cards from "./home/smallcards";
import cardsData from "../data/home/smallcards";
import Header from "./home/Header";
import headerData from "../data/home/Header";
import membersData from "../data/home/members";
import Members from "./home/members";
import Brand from "./home/brands";
import brandData from "../data/home/brands";
import Top from "./home/top";
import topData from "../data/home/top";
import BigCarousel from "./home/bigCarousel";
import bigCarouselData from "../data/home/bigCarousel";
import Footer from "./home/footer";
import footerData from "../data/home/footer";

function Home() {
  // const info = information.map((information) => {
  //   return (
  //     <Helpsec
  //       help={information.help}
  //       ourstore={information.ourstore}
  //       track={information.track}
  //     />
  //   );
  // });
  // const header = headerData.map((data) => {
  //   return <Header logo={data.logo} />;
  // });
  const carousel = carouselData.map((data) => {
    return <Carousel id={data.id} image={data.image} title={data.title} />;
  });
  const smallcarousel = smallData.map((data) => {
    return <Small title={data.title} count={data.count} image={data.picture} />;
  });
  const popular = popularData.map((data) => {
    return (
      <Popular
        title={data.title}
        price={data.price}
        img={data.img}
        stars={data.stars}
      />
    );
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
  const sale = saleData.map((data) => {
    return (
      <SaleSection
        bgimg={data.bgimg}
        saledesc={data.saledesc}
        description={data.description}
      />
    );
  });
  const addition = additionalData.map((data) => {
    return (
      <Additional Icon={data.Icon} text={data.text} moretxt={data.moretxt} />
    );
  });
  const card = bigData.map((data) => {
    return (
      <BigCards
        camImg={data.productImg}
        camName={data.productName}
        camPrice={data.productPrice}
      />
    );
  });
  const cards = cardsData.map((data) => {
    return (
      <Cards
        productImg={data.productImg}
        productName={data.productName}
        productPrice={data.productPrice}
      />
    );
  });
  const members = membersData.map((data) => {
    return <Members img={data.img} text={data.text} name={data.name} />;
  });
  const top = topData.map((data) => {
    return <Top header={data.header} btn={data.btn} />;
  });
  const brands = brandData.map((data) => {
    return <Brand brandLogo={data.brandLogo} />;
  });
  const big = bigCarouselData.map((data) => {
    return (
      <BigCarousel
        img={data.img}
        header={data.header}
        date={data.date}
        text={data.text}
        maker={data.maker}
      />
    );
  });
  // const footer = footerData.map((data) => {
  //   return <Footer icon={data.icon} />;
  // });

  return (
    <div className="App">
      {/* {info}
      {header} */}
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
        disableDotsControls="true"
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
      </AliceCarousel>
      {sale}
      <div className="d-flex mb-5 w-auto">
        {card}
        {cards}
      </div>
      <div className=" addition d-flex p-3 justify-content-evenly rounded-4 mb-5 mt-5">
        {addition}
      </div>
      <AliceCarousel
        autoPlay
        autoPlayInterval="3000"
        responsive={{
          0: { items: 3 },
        }}
        disableButtonsControls="true"
      >
        {members}
      </AliceCarousel>
      <div className=" brands d-flex justify-content-around p-3 mt-5">
        {brands}
      </div>
      {top}
      <AliceCarousel
        autoPlay
        autoPlayInterval="3000"
        responsive={{
          0: { items: 2 },
        }}
        disableButtonsControls="true"
      >
        {big}
      </AliceCarousel>
      {/* {footer} */}
    </div>
  );
}

export default Home;
