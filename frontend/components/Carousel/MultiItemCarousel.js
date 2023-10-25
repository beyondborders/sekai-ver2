'use client'

import Slider from "react-slick";

export default function CarouselComponent(props) {
  const { centerMode, items, dots, arrows, slidesToShow, slidesToShowMobile, autoPlay, autoplaySpeed, nextArrow, prevArrow } = props

  const settings = {
    centerMode: centerMode || false,
    centerPadding: "140px",
    infinite: true,
    autoPlay: autoPlay,
    speed: 500,
    slidesToScroll: 1,
    slidesToShow: slidesToShow || 2,
    autoplaySpeed: autoplaySpeed || 4000,
    dots: dots,
    arrows: arrows,
    nextArrow: nextArrow,
    prevArrow: prevArrow,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: slidesToShowMobile || 1,
          centerMode: false,
        }
      },
    ]
  };
  return (

    <Slider {...settings}>
      {!!items && items.map((item, index) => {
        return (
          <div key={index}>
            {item}
          </div>
        )
      })}
    </Slider>

  );
}
