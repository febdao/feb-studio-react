import { Swiper, SwiperSlide } from "swiper/react"
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules"
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'

function Hero({ photos }) {
  console.log("photos: ", photos)
  return (
    <div className="hero-banner">
      <div className="hero-banner__content">
        <img className="hero-banner__logo" src="images/logo.png" alt="logo" />
        <h1 className="hero-banner__title">
          <span className="hidden">Feb Studio</span>
          We Capture Your Best <span>Moments</span>
        </h1>
      </div>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        spaceBetween={20}
        slidesPerView={1}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        autoplay={true}
        pagination={{ clickable: true }}
        modules={[EffectCoverflow, Pagination, Autoplay]}
        breakpoints={{
          640: {
            slidesPerView: 3,
            pagination: false
          },
          1536: {
            slidesPerView: 5,
            pagination: false
          }
        }}
      >
        {photos.map((photo) => (
          <SwiperSlide key={photo} data-swiper-autoplay={5000}>
            <img className="hero-baner__image" src={photo} alt="hero" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default Hero
