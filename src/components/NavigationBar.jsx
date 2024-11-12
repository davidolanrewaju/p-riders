import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';

import { logout } from '../reducers/authentication/authenticationSlice';

const NavigationBar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [toggleSearch, setToggleSearch] = useState(false);
  const [toggleMenu, setToggleMenu] = useState(false);
  const [toggleDropdown, setToggleDropdown] = useState(false);
  const token = useSelector((state) => state.authentication.token);

  const handleUserLogout = async () => {
    try {
      await dispatch(logout()).unwrap();
      navigate('/');
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  const toggleSearchHandler = () => {
    setToggleSearch(!toggleSearch);
  };

  const toggleMenuHandler = () => {
    setToggleMenu(!toggleMenu);
  };

  const toggleDropdownHandler = (e) => {
    e.preventDefault();
    setToggleDropdown((prevState) => !prevState);
  };

  return (
    <div>
      <header className='header-area'>
        <div className='top-header'>
          <div className='container'>
            <div className='row align-items-center'>
              <div className='col-lg-6 col-sm-6'>
                <ul className='left-info'>
                  <li>
                    <a href='mailto:hello@plateauexpress.net'>
                      <i className='bx bxs-envelope'></i>
                      support@plateauexpress.net
                    </a>
                  </li>
                  <li>
                    <a href='tel:+234 911 1120 005'>
                      <i className='bx bxs-phone-call'></i>
                      +234 911 1120 005
                    </a>
                  </li>
                </ul>
              </div>

              <div className='col-lg-6 col-sm-6'>
                <ul className='right-info'>
                  <li className='mr-20'>
                    <a href='#'>Contact</a>
                  </li>
                  <li className='mr-20'>
                    <a href='#'>Career</a>
                  </li>
                  <li className='mr-20'>
                    <a href='#'>News &amp; Media</a>
                  </li>
                  <li>
                    <a href='https://web.facebook.com/Plateauriders' target='_blank'>
                      <i className='bx bxl-facebook'></i>
                    </a>
                  </li>
                  <li>
                    <a href='https://twitter.com/Plateauriders' target='_blank'>
                      <i className='bx bxl-twitter'></i>
                    </a>
                  </li>

                  <li>
                    <a href='https://www.instagram.com/plateauriders/' target='_blank'>
                      <i className='bx bxl-instagram'></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Start Navbar Area */}
        <div className='navbar-area'>
          <div className='ferry-responsive-nav'>
            <div className='container'>
              <div className='ferry-responsive-menu mean-container'>
                <div className='mean-bar'>
                  <a href='#nav' onClick={toggleMenuHandler} className={`${toggleMenu === false ? 'meanmenu-reveal' : 'meanclose'}`} style={{ right: 0, left: 'auto', textAlign: 'center', textIndent: 0, fontSize: 18 }}>
                    <span>
                      <span>
                        <span></span>
                      </span>
                    </span>
                  </a>
                  <a onClick={toggleMenuHandler} className={`${toggleMenu === false ? 'meanclose' : 'meanmenu-reveal'}`} href='#nav' style={{ display: toggleMenu === true ? 'block' : 'none', right: 0, left: 'auto', textAlign: 'center', textIndent: '0px', fontSize: '18px' }}>
                    X
                  </a>
                  <nav className='mean-nav' style={{ marginTop: '68px' }}>
                    <ul className='navbar-nav ms-auto' style={{ display: toggleMenu ? 'block' : 'none' }}>
                      <li className='nav-item'>
                        <NavLink to='/' className='nav-link active'>
                          Home
                        </NavLink>
                      </li>
                      <li className='nav-item'>
                        <NavLink to='/' className='nav-link'>
                          Book a Ride
                        </NavLink>
                      </li>
                      <li className='nav-item' onClick={toggleDropdownHandler}>
                        <a href='#' className='nav-link'>
                          Other Info <i className='bx bx-chevron-down'></i>
                        </a>
                        <ul className='dropdown-menu' style={{ display: toggleDropdown ? 'block' : 'none' }}>
                          <li className='nav-item'>
                            <NavLink to='/about' className='nav-link'>
                              About Plateau Riders
                            </NavLink>
                          </li>
                          <li className='nav-item'>
                            <NavLink to='/about' className='nav-link'>
                              Routes We Cover
                            </NavLink>
                          </li>
                          <li className='nav-item'>
                            <a href='#' className='nav-link'>
                              News and Publicity
                            </a>
                          </li>
                        </ul>
                        {toggleDropdown === false ? (
                          <a className='mean-expand' href='#' style={{ fontSize: 18 }}>
                            +
                          </a>
                        ) : (
                          <a className='mean-expand' href='#' style={{ fontSize: 18 }}>
                            -
                          </a>
                        )}
                      </li>
                      <li className='nav-item'>
                        <NavLink to='https://plateauexpress.net' className='nav-link'>
                          Corporate Website
                        </NavLink>
                      </li>
                      <li className='nav-item'>
                        <NavLink to='/contact' className='nav-link'>
                          Contact
                        </NavLink>
                      </li>
                      {token ? (
                         <>
                         <li className='nav-item'>
                           <NavLink to='/customer/history' className='nav-link'>
                             Profile
                           </NavLink>
                         </li>
                         <li className='nav-item'>
                           <a onClick={handleUserLogout} href='#' className='nav-link'>
                             Logout
                           </a>
                         </li>
                       </>
                      ) : (
                        <li className='nav-item'>
                        <NavLink to='/login' className='nav-link'>
                          Login
                        </NavLink>
                      </li>
                      )}

                      <li className='nav-item mean-last' onClick={toggleSearchHandler}>
                        <a href='javascript:void(0)' className='nav-link search-box'>
                          <i className='bx bx-search'></i>
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
                <div className='logo'>
                  <NavLink to='/'>
                    <img src='/img/logo.png' width='150' className='main-logo' alt='logo' />
                    <img src='/img/logo-2.png' width='150' className='white-logo' alt='logo' />
                  </NavLink>
                </div>
              </div>
            </div>
          </div>

          <div className='ferry-nav'>
            <div className='container'>
              <nav className='navbar navbar-expand-md navbar-light'>
                <NavLink className='navbar-brand' to='/'>
                  <img src='/img/logo.png' width='150' className='main-logo' alt='logo' />
                  <img src='/img/logo-2.png' width='150' className='white-logo' alt='logo' />
                </NavLink>

                <div className='mean-push'></div>
                <div className='collapse navbar-collapse mean-menu' style={{ display: 'none' }}>
                  <ul className='navbar-nav ms-auto'>
                    <li className='nav-item'>
                      <NavLink to='/' className='nav-link active'>
                        Home
                      </NavLink>
                    </li>
                    <li className='nav-item'>
                      <NavLink to='/' className='nav-link'>
                        Book a Ride
                      </NavLink>
                    </li>
                    <li className='nav-item'>
                      <a href='#' className='nav-link'>
                        Other Info <i className='bx bx-chevron-down'></i>
                      </a>
                      <ul className='dropdown-menu'>
                        <li className='nav-item'>
                          <NavLink to='/about' className='nav-link'>
                            About Plateau Riders
                          </NavLink>
                        </li>
                        <li className='nav-item'>
                          <NavLink to='/about' className='nav-link'>
                            Routes We Cover
                          </NavLink>
                        </li>
                        <li className='nav-item'>
                          <a href='#' className='nav-link'>
                            News and Publicity
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className='nav-item'>
                      <a href='https://plateauexpress.net' className='nav-link'>
                        Corporate Website
                      </a>
                    </li>
                    <li className='nav-item'>
                      <NavLink to='/contact' className='nav-link'>
                        Contact
                      </NavLink>
                    </li>
                    {token ? (
                         <>
                         <li className='nav-item'>
                           <NavLink to='/customer/history' className='nav-link'>
                             Profile
                           </NavLink>
                         </li>
                         <li className='nav-item'>
                           <a onClick={handleUserLogout} href='#' className='nav-link'>
                             Logout
                           </a>
                         </li>
                       </>
                      ) : (
                        <li className='nav-item'>
                        <NavLink to='/login' className='nav-link'>
                          Login
                        </NavLink>
                      </li>
                      )}
                    <li className='nav-item mean-last' onClick={toggleSearchHandler}>
                      <a href='javascript:void(0)' className='nav-link search-box'>
                        <i className='bx bx-search'></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
          </div>
        </div>
        {/* End Navbar Area */}
      </header>

      <div className={`search-overlay ${toggleSearch === true ? 'search-overlay-active' : ''}`}>
        <div className='d-table'>
          <div className='d-table-cell'>
            <div className='search-overlay-layer'></div>
            <div className='search-overlay-layer'></div>
            <div className='search-overlay-layer'></div>

            <div className='search-overlay-close' onClick={() => setToggleSearch(false)}>
              <span className='search-overlay-close-line'></span>
              <span className='search-overlay-close-line'></span>
            </div>

            <div className='search-overlay-form'>
              <form>
                <input type='text' className='input-search' placeholder='Search here...' />
                <button type='submit'>
                  <i className='bx bx-search'></i>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavigationBar;
