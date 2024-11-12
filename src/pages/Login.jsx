import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import Footer from '../components/Footer';
import NavigationBar from '../components/NavigationBar';

import { login } from '../reducers/authentication/authenticationSlice';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { error, loading } = useSelector((state) => state.authentication);

  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
  });

  const handleCredentials = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    const result = await dispatch(login(credentials));
    if (!result.error) {
      navigate('/');
    }
  };
  return (
    <>
      <NavigationBar />
      <main className='py-4'>
        {/* Page banner Area */}
        <div className='page-banner bg-3'>
          <div className='d-table'>
            <div className='d-table-cell'>
              <div className='container'>
                <div className='page-content'>
                  <h2>Sign In</h2>
                  <ul>
                    <li>
                      <a href='https://plateauriders.com'>Home</a>
                    </li>
                    <li>Sign In</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Page banner Area */}

        {/* Start Sign in Area */}
        <div className='sign-in-area ptb-100'>
          <div className='container'>
            <div className='section-title'>
              <h2>Sign in to Your Account!</h2>
              <p>Travel in Safety and Comfort</p>
            </div>

            <div className='sign-in-form'>
              <form  onSubmit={handleLogin}>
                <input type='hidden' name='_token' value='Yob1MkUfApEaIN5rGm3wtkvpC5idUNarRL9fUkx5' autoComplete='on' />
                <div className='form-group'>
                  <input type='email' name='email' className='form-control' id='email' placeholder='Email' value={credentials.email} onChange={handleCredentials} required />
                </div>

                <div className='form-group'>
                  <input type='password' name='password' className='form-control' id='password' placeholder='Password' value={credentials.password} onChange={handleCredentials} required />
                </div>

                {error && <p className="text-danger mb-0">{error}</p>}

                <div className='text-center'>
                  <button type='submit' className='btn default-btn-one'>
                  {loading ? 'Signing in...' : 'Sign In'}
                  </button>

                  <p className='account-decs'>
                    <a className='text-success' href='https://plateauriders.com/password/reset'>
                      Forgot Your Password?
                    </a>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
        {/* End Sign in Area */}
      </main>
      <Footer />
    </>
  );
};

export default Login;
