// import Swiper core and required modules
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  EffectFade,
} from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/effect-fade";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import image1 from "../assets/imgs/1.png";
import image2 from "../assets/imgs/2.png";
import image3 from "../assets/imgs/3.png";
import DatesCategoryCard from "./DatesCategoryCard";

const datesArr = [
  {
    id: crypto.randomUUID(),
    name: "خلاص فاخر ( جامبو )",
    description: "قدوع الشيوخ بالذهبي",
    image: image3,
    sizes: ["نصف كيلو"],
  },
  {
    id: crypto.randomUUID(),
    name: "خلاص سوبر بلس",
    description: "قدوع الشيوخ بالأخضر",
    image: image2,
    sizes: ["ربع كيلو"],
  },
  {
    id: crypto.randomUUID(),
    name: "خلاص سوبر ",
    description: "قدوع البيت ",
    image: image1,
    sizes: ["نصف كيلو", "ربع كيلو"],
  },
];
const DatesCategoryList = () => {
  return (
    <>
      <div id="products" className="container my-5">
        <div className="d-flex justify-content-center">
          <h2 className="fs-1 fw-bold text-center my-5 border-bottom border-secondary border-5  ">
            منتجاتنا
          </h2>
        </div>

        <Swiper
          className="mb-5"
          // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar, A11y, EffectFade]}
          effect="fade"
          spaceBetween={7}
          slidesPerView={2}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          onSwiper={() => {}}
          onSlideChange={() => {}}
        >
          {datesArr.map((dateObj) => (
            <SwiperSlide key={dateObj.id} className="mb-5 col-6 col-lg-4 ">
              <DatesCategoryCard {...dateObj} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default DatesCategoryList;
