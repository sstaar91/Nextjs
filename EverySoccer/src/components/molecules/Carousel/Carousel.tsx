"use client";

import React, { Fragment } from "react";
import Slider from "react-slick";
import "./style.css";

interface Props {
  images: { id: number; title: string; color: string }[];
}

const Carousel = ({ images }: Props) => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <article className="w-full">
      <Slider {...settings}>
        {images.map(({ id, title, color }) => {
          return (
            <Fragment key={id}>
              <div className="flexCenter h-[420px] gap-6 p-4">
                <div className={`h-[300px] w-2/4 ${color} rounded-2xl`} />
                <div className="text-5xl font-bold leading-tight whitespace-pre-line">{title}</div>
              </div>
            </Fragment>
          );
        })}
      </Slider>
    </article>
  );
};

export default Carousel;
