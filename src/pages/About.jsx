import { NavLink } from 'react-router-dom';

import Footer from '../components/Footer';
import NavigationBar from '../components/NavigationBar';

const About = () => {
  return (
    <>
      <NavigationBar />
      <main className='py-4'>
        {/* Page banner Area */}
        <div className='page-banner bg-1'>
          <div className='d-table'>
            <div className='d-table-cell'>
              <div className='container'>
                <div className='page-content'>
                  <h2>About Us</h2>
                  <ul>
                    <li>
                      <NavLink to='/'>Home</NavLink>
                    </li>
                    <li>About Us</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Page banner Area */}

        {/* About Safe Area */}

        {/* End About Safe Area */}

        {/* About Safe Area */}
        <div className='about-text-area ptb-100'>
          <div className='container'>
            <div className='row align-items-center'>
              <div className='col-lg-12'>
                <div className='about-safe-text'>
                  <h2>Routes We Cover</h2>
                </div>
              </div>
            </div>
            <div className='row'>
              <div className='col-lg-4 col-md-6 mt-3'>
                <img src='/img/about/route01.jpg' alt='Route 01' />
              </div>
              <div className='col-lg-4 col-md-6 mt-3'>
                <img src='/img/about/route02.jpg' alt='Route 02' />
              </div>
              <div className='col-lg-4 col-md-6 mt-3'>
                <img src='/img/about/route03.jpg' alt='Route 03' />
              </div>
            </div>

            <div className='row'>
              <div className='col-lg-4 col-md-6 mt-3'>
                <img src='/img/about/route04.jpg' alt='Route 04' />
              </div>
              <div className='col-lg-4 col-md-6 mt-3'>
                <img src='/img/about/route05.jpg' alt='Route 05' />
              </div>
              <div className='col-lg-4 col-md-6 mt-3'>
                <img src='/img/about/route06.jpg' alt='Route 06' />
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default About;
