"use client";

import ImageArticle from "@/components/atoms/ImageArticle";
import React from "react";
import Slider from "react-slick";

const Carousel = () => {
  const settings = {
    infinite: true, // 콘텐츠 끝까지 갔을 때 다음 콘텐츠를 처음 콘텐츠로 가져와 반복함
    speed: 500, // 콘텐츠를 넘어갈 때 속도
    slidesToShow: 1, // 한 화면에 보이는 콘텐츠 개수를 말함
    slidesToScroll: 1, // 한 번에 넘어가는 콘텐츠 수
    autoplay: false, // 자동으로 슬라이드가 넘어갈지에 대한 여부
    autoplaySpeed: 3000,
  };

  return (
    <article className="w-full h-[420px]">
      <Slider {...settings}>
        <ImageArticle />
        <ImageArticle />
        <ImageArticle />
      </Slider>
    </article>
  );
};

export default Carousel;
