import React from "react";
import { data } from "../../assets/all_product";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Review = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };
  return (
    <div className="w-3/4 m-auto display" id="review">
      <h2>
        <b>Reviews</b>
      </h2>
      <div className="mt-10">
        <Slider {...settings}>
          {data.map((d) => (
            <div className=" bg-slate-200 h-[450px] text-black ">
              <div className="h-56 rounded-t-xl bg-slate-800 flex justify-center items-center">
                <img src={d.image} alt="" className="h-44 w-44 rounded-full" />
              </div>
              <div className="flex flex-col justify-center items-center gap-5 p-3">
                <p className="text-xl font-semibold">{d.name}</p>
                <p>{d.rating}</p>
                <p className=" relative bottom-3 ">{d.review}</p>
                <button className="bg-black text-white text-lg px-6 py-1 relative bottom-5 rounded-xl">
                  Read More
                </button>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Review;
