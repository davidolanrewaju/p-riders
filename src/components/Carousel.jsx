import { useState, useEffect } from 'react';
import OwlCarousel from 'https://esm.sh/react-owl-carousel';

const Carousel = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);
  const options = {
    items: 1,
    loop: true,
    nav: true,
    dots: false,
    autoplay: true,
    autoplayTimeout: 5000,
    smartSpeed: 1000,
    navText: ['<i class="bx bx-chevron-left pb-5 pb-md-0"></i>', '<i class="bx bx-chevron-right pb-5 pb-md-0"></i>'],
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 1,
      },
      1024: {
        items: 1,
      },
    },
  };

  if (!mounted) return null;

  return (
    <div className='col-lg-6' style={{ marginTop: '120px' }}>
      <OwlCarousel className='hero-slider-two owl-carousel owl-theme' {...options}>
        <div
          className='hero-slider-two-item item-bg1'
          style={{
            height: '800px',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            position: 'relative',
          }}
        >
          <div className='d-table' style={{ height: '100%', width: '100%' }}>
            <div className='d-table-cell'>
              <div className='container'>
                <div className='row align-items-center'>
                  <div className='col-lg-12' style={{ background: 'rgba(0, 0, 0, 0.6)', padding: '10px' }}>
                    <div className='banner-content'>
                      <span>Since 1988</span>
                      <h1>Improved Customer Experience</h1>
                      <p>We strive to understand customer needs and prioritize satisfaction to foster a wholistic travel experience.</p>

                      <a href='#bookingForm' className='default-btn-one me-3'>
                        Book Now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className='hero-slider-two-item item-bg2'
          style={{
            height: '800px',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            position: 'relative',
          }}
        >
          <div className='d-table' style={{ height: '100%', width: '100%' }}>
            <div className='d-table-cell'>
              <div className='container'>
                <div className='row align-items-center'>
                  <div className='col-lg-12' style={{ background: 'rgba(0, 0, 0, 0.6)', padding: '10px' }}>
                    <div className='banner-content'>
                      <span>Since 1988</span>
                      <h1>Comfortable, Affordable and Reliable Trips</h1>
                      <p>Our reliable transportation ensures you reach your destination safely and on time.</p>
                      <a href='#bookingForm' className='default-btn-one me-3'>
                        Book Now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className='hero-slider-two-item item-bg3'
          style={{
            height: '800px',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            position: 'relative',
          }}
        >
          <div className='d-table' style={{ height: '100%', width: '100%' }}>
            <div className='d-table-cell'>
              <div className='container'>
                <div className='row align-items-center'>
                  <div className='col-lg-12' style={{ background: 'rgba(0, 0, 0, 0.6)', padding: '10px' }}>
                    <div className='banner-content'>
                      <span>Since 1988</span>
                      <h1>Trained Drivers and Support staff</h1>
                      <p>We are committed to providing exceptional service. Our drivers and team undergo rigorous training to offer assistance with professionalism and efficiency</p>
                      <a href='#bookingForm' className='default-btn-one me-3'>
                        Book Now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </OwlCarousel>
    </div>
  );
};

export default Carousel;
