import React from "react";
import "./headerSlider.css";
// Import Swiper and SwiperSlide from 'swiper/react' for React integration
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles (for general styles, navigation, and pagination)
import "swiper/css"; // Import general Swiper styles
import "swiper/css/navigation"; // Import styles for navigation
import "swiper/css/pagination"; // Import styles for pagination
import "swiper/css/effect-fade"; // Import fade effect styles

// Import necessary Swiper modules
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper/modules";
import { slideProducts } from "../../../data";
import { Link } from "react-router-dom";

function Headerslider() {
  return (
    <Swiper
      effect="fade" // Apply fade effect
      spaceBetween={0} // No space between slides
      centeredSlides={true} // Center the slides
      autoplay={{
        delay: 2500, // Autoplay delay in ms
        disableOnInteraction: false, // Autoplay won't stop after user interaction
      }}
      pagination={{
        clickable: true, // Enable clickable pagination
      }}
      navigation={false} // Disable navigation buttons
      loop={true} // Loop through slides
      speed={500} // Control the speed of the fade transition (500ms is subtle)
      modules={[Autoplay, Pagination, Navigation, EffectFade]} // Include the necessary modules
      className="mySwiper"
    >
      {slideProducts.map((slide, index) => (
        <SwiperSlide
          key={index}
          className="relative flex justify-center items-center"
        >
          <img
            src={slide.image}
            alt={slide.name}
            className="w-full !h:[232px] md:h-[512px] object-cover rounded-sm" // Ensure the image covers the entire area
          />
          <Link to={`/product/${slide.id}`}>
            <div className="content absolute left-0 right-0 mx-8 text-center text-white text-sm md:text-2xl py-2 md:py-5 bottom-8 rounder-sm bg-customRed-700 bg-opacity-90">
              {`${slide.name} - Order Now`}
            </div>
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default Headerslider;
