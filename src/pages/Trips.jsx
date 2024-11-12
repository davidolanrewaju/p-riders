import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';

import { directBooking, clearError } from '../reducers/trips/tripsSlice';

import Footer from '../components/Footer';
import TripList from '../layout/TripList';
import NavigationBar from '../components/NavigationBar';

const Trips = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const formData = location.state;
  const { loading, tripsList, error } = useSelector((state) => state.tripList);
  const tripDate = formData.date;

  useEffect(() => {
    if (formData) {
      dispatch(directBooking(formData));
    } else {
      navigate('/');
    }
  }, [dispatch, formData, navigate]);

useEffect(() => {
  return () => {
    dispatch(clearError());
  };
}, [dispatch]);


  if (error) {
    navigate('/', { state: { error } });
  }

  return (
    <>
      <NavigationBar />
      <main className='py-4'>
        <div className='container mt-5'>
          <div className='row mt-5'>
            <div className='col-md-12 col-lg-12 col-sm-12'>
              <div className='mt-5 mb-5'>
                <h3 style={{ marginTop: '100px' }}>
                  What is Your Prefered <br />
                  Take off Time?
                </h3>
                <TripList loading={loading} tripsData={tripsList} tripDate={tripDate} />
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Trips;
