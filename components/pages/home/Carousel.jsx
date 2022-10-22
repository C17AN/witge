import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";

const DEMO_PLAYER_IMAGE = "https://pbs.twimg.com/media/Dty8RAJVAAA2rPo.jpg";

const ImageCarousel = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={DEMO_PLAYER_IMAGE}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>티어 올리기 가장 쉬운 방법</h3>
          <p>SKT T1의 칸 선수와 함께하세요</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={DEMO_PLAYER_IMAGE}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>티어 올리기 가장 쉬운 방법</h3>
          <p>SKT T1의 칸 선수와 함께하세요</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={DEMO_PLAYER_IMAGE}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>티어 올리기 가장 쉬운 방법</h3>
          <p>SKT T1의 칸 선수와 함께하세요</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default ImageCarousel;
