import NewsLetter from './NewsLetter';

const HomeAbout = () => {
  return (
    <>
      {/* About Safe Area */}
      <div className='about-text-area ptb-100' style={{ marginTop: '50px' }}>
        <div className='container'>
          <div className='row align-items-center'>
            <div className='col-lg-6'>
              <div className='about-safe-text'>
                <h2>Re Branded, Re Energised</h2>
                <p>
                  I&apos;m pleased to announce the roll-out plan for Plateau Riders rebranding initiative, <b>&quot;The Rebirth.&quot;</b>{' '}
                </p>
                <p>
                  This comprehensive rebrand will bring an entirely new look and feel to our corporate identity and communications. Our fleets will be updated with this fresh new branding that reflects our evolving vision in phases over the next few months. <br />
                  <br />
                  The new buses will feature the new branding design, while we gradually phase out buses with the old branding.{' '}
                </p>
                <p>This is an exciting new chapter for our organization as we work tirelessly to deliver on this Rebirth campaign for our valued customers and partners.</p>
              </div>

              <div className='shipping-card'>
                <div className='shipping-contant'>
                  <div className='shipping-image'>
                    <img src='/img/clients/gm.jpg' width='100px' alt='image' />
                  </div>
                  <h3>Samuel J. Gwott</h3>
                  <span>Group Managing Director</span>
                  <p>Plateau Express Services Limited</p>
                </div>
              </div>
            </div>
            <div className='col-lg-6'>
              <div className='safe-image'>
                <img src='/img/speciality/rebirth.jpg' alt='image' />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End About Safe Area */}

      {/* About Info */}
      <div className='about-info-area pb-70'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-4 col-md-6'>
              <div className='about-info-card'>
                <h3>Our Vision</h3>
                <div>{'To be the best Mass Transit Service Provider in Nigeria'}.</div>
              </div>
            </div>

            <div className='col-lg-4 col-md-6'>
              <div className='about-info-card'>
                <h3>Our Mission</h3>
                <div>{'To provide safe, comfortable and affordable Mass Transit service to all classes of clients'}.</div>
              </div>
            </div>

            <div className='col-lg-4 col-md-6 offset-md-3 offset-lg-0'>
              <div className='about-info-card'>
                <h3>Our Core Values</h3>
                <div>Our Company&apos;s Business is built on the platform of commitment, honesty, teamwork, service delivery and hard work.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End About Info */}

      {/* Choose Us Two Area */}
      <div className='choose-us-two'>
        <div className='container'>
          <div className='row align-items-center'>
            <div className='col-lg-6'>
              <div className='choose-content'>
                <div className='choose-us-text'>
                  <div className='section-title'>
                    <span>Why Choose Us</span>
                    <h2>Our Priority</h2>
                  </div>
                </div>

                <p>At Plateau Riders, we prioritize providing a modern, safe, and revitalized transportation experience for our valued customers. Our commitment to excellence is deeply rooted in our principles, and we go above and beyond to ensure your utmost satisfaction.</p>

                <ul>
                  <li>
                    <i className='bx bx-check'></i>
                    Nationwide service
                  </li>
                  <li>
                    <i className='bx bx-check'></i>
                    24/7 support
                  </li>
                  <li>
                    <i className='bx bx-check'></i>
                    Tracking service
                  </li>
                  <li>
                    <i className='bx bx-check'></i>
                    Fast and reliable
                  </li>
                </ul>
                <a href='#' className='default-btn-one'>
                  Contact Us
                </a>
              </div>
            </div>
            <div className='col-lg-6'>
              <div className='choose-us-image'>
                <img src='/img/brand.jpg' alt='image' />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Choose Us Two Area */}

      {/* Feedback Area */}
      <div className='feedback-area ptb-100'>
        <div className='container'>
          <div className='shape-four'>
            <img src='/img/shape/shape3.png' alt='Image' />
          </div>
          <div className='section-title'>
            <span>Clients Review</span>
            <h2>Our Clients Make Us Special</h2>
          </div>
          <div className='feedback-slider owl-carousel owl-theme owl-loaded owl-drag'>
            <div className='owl-stage-outer'>
              <div className='owl-stage' style={{ transform: 'translate3d(-1932px, 0px, 0px)', transition: 'all', width: '4830px' }}>
                <div className='owl-item cloned' style={{ marginRight: '80px' }}>
                  <div className='feedback-slider-item'>
                    <div className='feedback-icon-one'>
                      <i className='bx bxs-quote-left'></i>
                    </div>
                    <div className='feedback-img'>
                      <img src='/img/feedback/feedback1.jpg' alt='image' />
                      <h3>Shupel A O Ichaka</h3>
                      <span>Facebook User</span>
                    </div>

                    <div className='rating'>
                      <i className='bx bxs-star'></i>
                      <i className='bx bxs-star'></i>
                      <i className='bx bxs-star'></i>
                      <i className='bx bxs-star'></i>
                      <i className='bx bxs-star'></i>
                    </div>

                    <div className='feedback-text'>
                      <p>I got excited watching this video(of the launch), knowing that the famous Riders is back. Growing back then in Jos, Plateau Express Services Ltd was really a part of what made Jos a very special and successful city..</p>
                    </div>
                    <div className='feedback-icon-two'>
                      <i className='bx bxs-quote-right'></i>
                    </div>
                  </div>
                </div>
                <div className='owl-item cloned' style={{ width: '936px', marginRight: '30px' }}>
                  <div className='feedback-slider-item'>
                    <div className='feedback-icon-one'>
                      <i className='bx bxs-quote-left'></i>
                    </div>
                    <div className='feedback-img'>
                      <img src='/img/feedback/feedback1.jpg' alt='image' />
                      <h3>Shupel A O Ichaka</h3>
                      <span>Facebook User</span>
                    </div>

                    <div className='rating'>
                      <i className='bx bxs-star'></i>
                      <i className='bx bxs-star'></i>
                      <i className='bx bxs-star'></i>
                      <i className='bx bxs-star'></i>
                      <i className='bx bxs-star'></i>
                    </div>

                    <div className='feedback-text'>
                      <p>I got excited watching this video(of the launch), knowing that the famous Riders is back. Growing back then in Jos, Plateau Express Services Ltd was really a part of what made Jos a very special and successful city..</p>
                    </div>
                    <div className='feedback-icon-two'>
                      <i className='bx bxs-quote-right'></i>
                    </div>
                  </div>
                </div>
                <div className='owl-item active' style={{ width: '936px', marginRight: '30px' }}>
                  <div className='feedback-slider-item'>
                    <div className='feedback-icon-one'>
                      <i className='bx bxs-quote-left'></i>
                    </div>
                    <div className='feedback-img'>
                      <img src='/img/feedback/feedback1.jpg' alt='image' />
                      <h3>Shupel A O Ichaka</h3>
                      <span>Facebook User</span>
                    </div>

                    <div className='rating'>
                      <i className='bx bxs-star'></i>
                      <i className='bx bxs-star'></i>
                      <i className='bx bxs-star'></i>
                      <i className='bx bxs-star'></i>
                      <i className='bx bxs-star'></i>
                    </div>

                    <div className='feedback-text'>
                      <p>I got excited watching this video(of the launch), knowing that the famous Riders is back. Growing back then in Jos, Plateau Express Services Ltd was really a part of what made Jos a very special and successful city..</p>
                    </div>
                    <div className='feedback-icon-two'>
                      <i className='bx bxs-quote-right'></i>
                    </div>
                  </div>
                </div>
                <div className='owl-item cloned' style={{ width: '936px', marginRight: '30px' }}>
                  <div className='feedback-slider-item'>
                    <div className='feedback-icon-one'>
                      <i className='bx bxs-quote-left'></i>
                    </div>
                    <div className='feedback-img'>
                      <img src='/img/feedback/feedback1.jpg' alt='image' />
                      <h3>Shupel A O Ichaka</h3>
                      <span>Facebook User</span>
                    </div>

                    <div className='rating'>
                      <i className='bx bxs-star'></i>
                      <i className='bx bxs-star'></i>
                      <i className='bx bxs-star'></i>
                      <i className='bx bxs-star'></i>
                      <i className='bx bxs-star'></i>
                    </div>

                    <div className='feedback-text'>
                      <p>I got excited watching this video(of the launch), knowing that the famous Riders is back. Growing back then in Jos, Plateau Express Services Ltd was really a part of what made Jos a very special and successful city..</p>
                    </div>
                    <div className='feedback-icon-two'>
                      <i className='bx bxs-quote-right'></i>
                    </div>
                  </div>
                </div>
                <div className='owl-item cloned' style={{ width: '936px', marginRight: '30px' }}>
                  <div className='feedback-slider-item'>
                    <div className='feedback-icon-one'>
                      <i className='bx bxs-quote-left'></i>
                    </div>
                    <div className='feedback-img'>
                      <img src='/img/feedback/feedback1.jpg' alt='image' />
                      <h3>Shupel A O Ichaka</h3>
                      <span>Facebook User</span>
                    </div>

                    <div className='rating'>
                      <i className='bx bxs-star'></i>
                      <i className='bx bxs-star'></i>
                      <i className='bx bxs-star'></i>
                      <i className='bx bxs-star'></i>
                      <i className='bx bxs-star'></i>
                    </div>

                    <div className='feedback-text'>
                      <p>I got excited watching this video(of the launch), knowing that the famous Riders is back. Growing back then in Jos, Plateau Express Services Ltd was really a part of what made Jos a very special and successful city..</p>
                    </div>
                    <div className='feedback-icon-two'>
                      <i className='bx bxs-quote-right'></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='owl-nav disabled'>
              <button type='button' role='presentation' className='owl-prev'>
                <i className='bx bxs-left-arrow-alt'></i>
              </button>
              <button type='button' role='presentation' className='owl-next'>
                <i className='bx bxs-right-arrow-alt'></i>
              </button>
            </div>
            <div className='owl-dots disabled'></div>
          </div>
        </div>
      </div>
      {/* End Feedback Area */}

      {/* NewsLetter Area */}
      <NewsLetter />
      {/* End NewsLetter Area */}
    </>
  );
};

export default HomeAbout;
