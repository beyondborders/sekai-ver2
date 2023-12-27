'use client'

import Slider from "react-slick";

export default function CarouselComponent(props) {
  const { items, dots, fade, arrow, autoplaySpeed } = props

  const settings = {
    infinite: true,
    autoplay: false,
    arrows: arrow || false,
    dots: dots,
    fade: fade,
    autoplaySpeed: autoplaySpeed || 10000,
    pauseOnHover: false,
    slidesToShow: 1,
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
