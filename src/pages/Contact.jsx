import Footer from '../components/Footer';
import NavigationBar from '../components/NavigationBar';

const Contact = () => {
  return (
    <>
      <NavigationBar />
      <main className='py-4'>
        {/* Page banner Area */}
        <div className='page-banner bg-contact'>
          <div className='d-table'>
            <div className='d-table-cell'>
              <div className='container'>
                <div className='page-content'>
                  <h2>Contact Us</h2>
                  <ul>
                    <li>
                      <a href='index.html'>Home</a>
                    </li>
                    <li>Contact</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Page banner Area */}

        {/* Contact Info */}
        <div className='pt-100 pb-70'>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-4 col-md-6'>
                <div className='contact-info'>
                  <i className='bx bxs-phone'></i>
                  <h4>Contact Number</h4>
                  <p>
                    <a href='tel:+0123654987'>+234 911 1120 004</a>
                  </p>
                  <p>
                    <a href='tel:+0123456789'>+234 911 1120 005</a>
                  </p>
                </div>
              </div>

              <div className='col-lg-4 col-md-6'>
                <div className='contact-info'>
                  <i className='bx bxs-location-plus'></i>
                  <h4>Our Location</h4>
                  <p>36 Murtala Mohammed Way</p>
                  <p>Jos, Plateau State</p>
                </div>
              </div>

              <div className='col-lg-4 col-md-6 offset-md-3 offset-lg-0'>
                <div className='contact-info'>
                  <i className='bx bxs-envelope'></i>
                  <h4>Email Address</h4>
                  <p>
                    <a href='mailto:hello@plateauexpress.net'>hello@plateauexpress.net</a>
                  </p>
                  <p>
                    <a href='mailto:info@plateauexpress.net'>info@plateauexpress.net</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Contact Info */}

        {/* Contact Area */}
        <div className='contact-form-area pb-100'>
          <div className='container'>
            <div className='section-title'>
              <span>Contact Us</span>
              <h2>Get in Touch</h2>
            </div>

            <div className='contact-form'>
              <form id='contactForm' noValidate>
                <div className='row'>
                  <div className='col-md-6'>
                    <div className='form-group'>
                      <input type='text' name='name' className='form-control' id='name' required data-error='Please enter your name' placeholder='Your name' />
                      <div className='help-block with-errors'></div>
                    </div>
                  </div>

                  <div className='col-md-6'>
                    <div className='form-group'>
                      <input type='email' name='email' className='form-control' id='email' required data-error='Please enter your email' placeholder='Your email address' />
                      <div className='help-block with-errors'></div>
                    </div>
                  </div>

                  <div className='col-md-6'>
                    <div className='form-group'>
                      <input type='text' name='msg_subject' id='msg_subject' className='form-control' required data-error='Please enter your subject' placeholder='Your Subject' />
                      <div className='help-block with-errors'></div>
                    </div>
                  </div>

                  <div className='col-md-6'>
                    <div className='form-group'>
                      <input type='text' name='phone_number' className='form-control' id='phone_number' required data-error='Please enter your phone number' placeholder='Your phone number' />
                      <div className='help-block with-errors'></div>
                    </div>
                  </div>

                  <div className='col-lg-12 col-md-12'>
                    <div className='form-group'>
                      <textarea name='message' id='message' className='form-control' cols='30' rows='6' required data-error='Please enter your message' placeholder='Write your message...'></textarea>
                      <div className='help-block with-errors'></div>
                    </div>
                  </div>

                  <div className='col-lg-12 col-md-12 text-center'>
                    <button type='submit' className='default-btn-one disabled' style={{ pointerEvents: 'all', cursor: 'pointer' }}>
                      Send Message
                    </button>
                    <div id='msgSubmit' className='h3 text-center hidden'></div>
                    <div className='clearfix'></div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        {/* Contact Area */}

        {/* Newsletter Area */}
        <div className='newsletter-area'>
          <div className='container'>
            <div className='newsletter-content'>
              <div className='row align-items-center'>
                <div className='col-lg-5'>
                  <div className='newsletter-title'>
                    <h3>Subscribe to our newsletter:</h3>
                    <p>Focused on the transport and logistic industry</p>
                  </div>
                </div>
                <div className='col-lg-7'>
                  <form className='newsletter-form' noValidate>
                    <input type='email' className='form-control' placeholder='Enter your email' name='EMAIL' required autoComplete='off' />
                    <button type='submit' className='btn btn-primary disabled' style={{ pointerEvents: 'all', cursor: 'pointer' }}>
                      Subscribe
                    </button>

                    <div id='validator-newsletter' className='form-result'></div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Newsletter Area */}
      </main>
      <Footer />
    </>
  );
};

export default Contact;
