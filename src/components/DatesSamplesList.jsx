import Slider from "react-slick";

import image1 from "../assets/imgs/1.png";
import image2 from "../assets/imgs/2.png";
import image3 from "../assets/imgs/3.png";
import DatesSampleCard from "./DatesSampleCard";

const cards = [
  {
    id: crypto.randomUUID(),
    name: "خلاص فاخر ( جامبو )",
    description: "قدوع الشيوخ بالذهبي",
    image: image3,
  },
  {
    id: crypto.randomUUID(),
    name: "خلاص سوبر بلس",
    description: "قدوع الشيوخ بالأخضر",
    image: image2,
  },
  {
    id: crypto.randomUUID(),
    name: "خلاص سوبر ",
    description: "قدوع البيت ",
    image: image1,
  },
  {
    id: crypto.randomUUID(),
    name: "خلاص سوبر ",
    description: "قدوع البيت ",
    image: image1,
  },
  {
    id: crypto.randomUUID(),
    name: "خلاص سوبر ",
    description: "قدوع البيت ",
    image: image1,
  },
  {
    id: crypto.randomUUID(),
    name: "خلاص سوبر ",
    description: "قدوع البيت ",
    image: image1,
  },
  {
    id: crypto.randomUUID(),
    name: "خلاص سوبر ",
    description: "قدوع البيت ",
    image: image1,
  },
];
const DatesSamplesList = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    rtl: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className="container">
        <div className="container my-5">
          <div className="row">
            <div className="col-12">
              <div className="d-flex justify-content-center">
                <h2 className="fw-bold text-center my-5 fs-1 border-bottom border-secondary border-5">
                  التمور المتوفرة
                </h2>
              </div>
              <Slider {...settings}>
                {cards.map((card) => (
                  <div key={card.id}>
                    <DatesSampleCard {...card} />
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DatesSamplesList;
