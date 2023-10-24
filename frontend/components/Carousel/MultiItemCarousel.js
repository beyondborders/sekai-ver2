'use client'

import Slider from "react-slick";

export default function CarouselComponent(props) {
  const { centerMode, items, dots, arrows, slidesToShow, autoplaySpeed } = props

  const settings = {
    centerMode: centerMode || false,
    centerPadding: "140px",
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShow || 2,
    autoplaySpeed: autoplaySpeed || 4000,
    dots: dots,
    arrows: arrows,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
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
