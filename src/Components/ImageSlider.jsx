import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function ImageSlider() {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <Carousel {...settings}>
      <Wrap>
        <a>
          <img src="/images/slider-scale.jpg" alt="" />
        </a>
      </Wrap>
      <Wrap>
        <a>
          <img src="/images/wakanda-300.jpg" alt="" />
        </a>
      </Wrap>
      <Wrap>
        <a>
          <img src="/images/drishyam-368.jpg" alt="" />
        </a>
      </Wrap>
      <Wrap>
        <a>
          <img src="/images/slider-badag.jpg" alt="" />
        </a>
      </Wrap>
      <Wrap>
        <a>
          <img src="/images/kang2.jpg" alt="" />
        </a>
      </Wrap>
    </Carousel>
  );
}

export default ImageSlider;

const Carousel = styled(Slider)`
  margin-top: 20px;
  margin-bottom: 20px;
  ul li button {
    &:before {
      color: white;
    }
  }

  li.slick-active button:before {
    color: white;
  }
  .slick-list {
    overflow: visible;
  }
`;

const Wrap = styled.div`
  cursor: pointer;
  a {
    border-radius: 4px;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
      rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    display: block;
    position: relative;
    padding: 4px;
    cursor: pointer;
    img {
      width: 100%;
      height: 100%;
    }
    &:hover {
      padding: 0;
      border: 4px solid rgba(249, 249, 249, 0.8);
      transition-duration: 300ms;
    }
  }
`;
