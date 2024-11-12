import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { checkAuthStatus } from './reducers/authentication/authenticationSlice';

import Seat from './pages/Seat';
import Home from './pages/Home';
import About from './pages/About';
import Trips from './pages/Trips';
import Contact from './pages/Contact';
import Payment from './pages/Payment';
import Loader from './components/reusable/Loader';
import PassengerDetails from './pages/PassengerDetails';
import Login from './pages/Login';
import Profile from './pages/Profile';

// ProtectedRoute component
const ProtectedRoute = ({ children }) => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.authentication.isAuthenticated);
  const loading = useSelector((state) => state.authentication.loading);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated && !loading) {
      dispatch(checkAuthStatus());
    }
  }, [dispatch, isAuthenticated, loading]);

  if (loading) {
    return <Loader />;
  }

  if (!isAuthenticated) {
    return navigate('/login');
  }
  return children;
};

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkAuthStatus());
  }, [dispatch]);

  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/login' element={<Login />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/bookings/select/vehicles' element={<Trips />} />
      <Route path='/bookings/select/seats/:id' element={<Seat />} />
      <Route path='/bookings/details' element={<PassengerDetails />} />

      {/* Protected Routes */}

      <Route
        path='/bookings/save'
        element={
          <ProtectedRoute>
            <Payment />
          </ProtectedRoute>
        }
      />
      <Route
        path='/customer/history'
        element={
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}

ProtectedRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

export default App;
