import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper-bundle.css";
import "./PartnerSlider.scss";

// import required modules
import { Autoplay } from "swiper/modules";

const PartnerSlider = () => {
  return (
    <Swiper
      slidesPerView={3.5}
      loop={true}
      speed={5000}
      autoplay={{
        delay: 0,
        disableOnInteraction: false,
      }}
      allowTouchMove={false}
      modules={[Autoplay]}
      className="mySwiper"
    >
      <SwiperSlide>
        <div className="testimonial_card">
          <div className="testimonial_video">
            <video className="video_content" poster="/images/girls.svg" controls>
              <source src="/video/izi-video.mkv" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <p className="testimonial_text">
            With IZI Ish I optimized my Sales and got it almost 3X
          </p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="testimonial_card">
          <div className="testimonial_video">
            <video className="video_content" poster="/images/girls.svg" controls>
              <source src="/video/izi-video.mkv" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <p className="testimonial_text">
            With IZI Ish I optimized my Sales and got it almost 3X
          </p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="testimonial_card">
          <div className="testimonial_video">
            <video className="video_content" poster="/images/girls.svg" controls>
              <source src="/video/izi-video.mkv" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <p className="testimonial_text">
            With IZI Ish I optimized my Sales and got it almost 3X
          </p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="testimonial_card">
          <div className="testimonial_video">
            <video className="video_content" poster="/images/girls.svg" controls>
              <source src="/video/izi-video.mkv" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <p className="testimonial_text">
            With IZI Ish I optimized my Sales and got it almost 3X
          </p>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default PartnerSlider;
