import { Content, Footer, Header } from "antd/es/layout/layout";
import React from "react";
// import { Carousel } from "antd";
// import Carousel, { CarouselItem } from "./components/Carousel/Carousel";
import "font-awesome/css/font-awesome.min.css";
import Categories from "./components/Categories/Categories";

import "./style.scss";
function App() {
  return (
    <>
      <Header className="header">
        <h1 className="logo">Zamin</h1>
        <div className="input-icons">
          <i className="fa-solid fa-magnifying-glass fa-lg  icon"></i>
          <input
            className="input-field"
            type="text"
            placeholder="Taom, ichimlik va shirinliklarni qidiring..."
          />
        </div>
      </Header>
      <Categories />
    </>
  );
}

export default App;
{
  /* <Carousel>
<CarouselItem>Item 1</CarouselItem>
<CarouselItem>Item 2</CarouselItem>
<CarouselItem>Item 3</CarouselItem>
</Carousel> */
}
