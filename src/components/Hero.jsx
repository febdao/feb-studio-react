import { useMemo } from 'react'
import { Swiper, SwiperSlide } from "swiper/react"
import { EffectCoverflow, Autoplay } from "swiper/modules"
import 'swiper/css'
import 'swiper/css/effect-coverflow'

function Hero({ photos }) {
  const randomizedPhotos = useMemo(() => {
    if (!photos || photos.length === 0) {
      return []
    }
    const shuffled = [...photos]
    for (let i = shuffled.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
    }
    return shuffled
  }, [photos])
  
  return (
    <div className="hero-banner pb-14 lg:pb-24">
      <div className="hero-banner__content">
        <img className="hero-banner__logo" src="images/logo.png" alt="logo" />
        <h1 className="hero-banner__title block-title">
          <span className="hidden">Feb Studio</span>
          We Capture Your Best <span>Moments</span>
        </h1>
      </div>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        spaceBetween={5}
        slidesPerView={2}
        centeredSlides={true}
        centeredSlidesBounds={true}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false,
        }}
        autoplay={true}
        modules={[EffectCoverflow, Autoplay]}
        breakpoints={{
          640: {
            slidesPerView: 4
          },
          1536: {
            slidesPerView: 6
          }
        }}
      >
        {randomizedPhotos.map((photo) => (
          <SwiperSlide key={photo} data-swiper-autoplay={5000}>
            <img className="hero-baner__image" src={photo} alt="hero" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default Hero
