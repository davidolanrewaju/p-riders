const Footer = () => {
  return (
    <div>
      {/* Footer Area*/}
      <footer className='footer-area pt-100 pb-70 p-2'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-3 col-sm-6'>
              <div className='footer-widget'>
                <div className='logo'>
                  <img src='/img/logo.png' width='200' className='main-logo' alt='logo' />
                  <img src='/img/logo-2.png' width='200' className='white-logo' alt='logo' />
                </div>
                <p>Plateau Express Services Limited is focused on serving the good people of plateau state with cutting edge innovative services around transport and logistics</p>

                <ul className='footer-socials'>
                  <li>
                    <a href='https://web.facebook.com/Plateauriders' target='_blank' rel='noopener noreferrer'>
                      <i className='bx bxl-facebook'></i>
                    </a>
                  </li>
                  <li>
                    <a href='https://twitter.com/Plateauriders' target='_blank' rel='noopener noreferrer'>
                      <i className='bx bxl-twitter'></i>
                    </a>
                  </li>

                  <li>
                    <a href='https://www.instagram.com/plateauriders/' target='_blank' rel='noopener noreferrer'>
                      <i className='bx bxl-instagram'></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className='col-lg-3 col-sm-6'>
              <div className='footer-widget pl-80'>
                <h3>Company</h3>

                <ul className='footer-text'>
                  <li>
                    <a href='#'>About Us</a>
                  </li>
                  <li>
                    <a href='#'>Services</a>
                  </li>
                  <li>
                    <a href='#'>Features</a>
                  </li>
                  <li>
                    <a href='#'>Cost calculator</a>
                  </li>
                  <li>
                    <a href='#'>Latest News</a>
                  </li>
                </ul>
              </div>
            </div>

            <div className='col-lg-3 col-sm-6'>
              <div className='footer-widget pl-50'>
                <h3>Support</h3>

                <ul className='footer-text'>
                  <li>
                    <a href='#'>FAQ&apos;s</a>
                  </li>
                  <li>
                    <a href='#'>Privacy Policy</a>
                  </li>
                  <li>
                    <a href='#'>Terms & Conditions</a>
                  </li>
                  <li>
                    <a href='#'>Community</a>
                  </li>
                  <li>
                    <a href='#'>Contact Us</a>
                  </li>
                </ul>
              </div>
            </div>

            <div className='col-lg-3 col-sm-6'>
              <div className='footer-widget'>
                <h3>Contact Info</h3>
                <ul className='info-list'>
                  <li>
                    <i className='bx bxs-location-plus'></i>
                    36 Murtala Mohammed Way Jos, Plateau State
                  </li>
                  <li>
                    <i className='bx bxs-envelope'></i>
                    <a href='mailto:support@plateauexpress.net'>support@plateauexpress.net</a>
                  </li>
                  <li>
                    <i className='bx bxs-envelope'></i>
                    <a href='mailto:info@plateauexpress.net'>info@plateauexpress.net</a>
                  </li>
                  <li>
                    <i className='bx bxs-phone'></i>
                    <a href='tel:+234 911 1120 005'>+234 911 1120 005</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
      {/* End Footer Area */}

      {/* Footer bottom Area */}
      <div className='footer-bottom'>
        <div className='container'>
          <p>
            Copyright @2024 PESL. All Rights Reserved{' '}
            <a href='https://plateauexpress.net/' target='_blank' rel='noopener noreferrer' className='text-white'>
              PESL
            </a>{' '}
            | Powered with 💓 by{' '}
            <a href='#' className='text-white' target='_blank' rel='noopener noreferrer'>
              TransportR
            </a>
          </p>
        </div>
      </div>
      {/* End Footer bottom Area */}

      {/* Go Top */}
      <div className='go-top active'>
        <i className='bx bx-chevrons-up'></i>
      </div>
      {/* End Go Top */}
    </div>
  );
};

export default Footer;
