import React from "react";
import HeaderText from "./HeaderText";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { reviews } from "../utils/testimonials.js";
import ReviewCard from "./ReviewCard.jsx";


const Testimonial = () => {
  return (
    <section className="max-w-330 mx-auto py-20 px-6">
      <HeaderText text1={"What "} text2={"People say"} />

      {/* navigation buttons */}
      <div className="flex justify-end mt-10 gap-x-3">
        <button className="custom-prev text-2xl rounded-xl w-10 h-10 bg-zinc-200 flex justify-center items-center cursor-pointer hover:bg-linear-to-b hover:from-orange-400 hover:to-orange-500 hover:text-white transition-all duration-300">
          <IoIosArrowBack />
        </button>
        <button className="custom-next text-2xl rounded-xl w-10 h-10 bg-zinc-200 flex justify-center items-center cursor-pointer hover:bg-linear-to-b hover:from-orange-400 hover:to-orange-500 hover:text-white transition-all duration-300">
          <IoIosArrowForward />
        </button>
      </div>

      {/* swiper */}
      <Swiper
        modules={[Navigation]}
        navigation={{
          nextEl: ".custom-next",
          prevEl: ".custom-prev",
        }}
        grabCursor={true}
        loop={true}
        spaceBetween={24}
        slidesPerView={1}
        breakpoints={{
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
        className="mt-10"
      >
        {reviews.map((item, index) => (
          <SwiperSlide key={index}>
            <ReviewCard
              name={item.name}
              designation={item.designation}
              rating={item.rating}
              para={item.para}
              image={item.image}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonial;
