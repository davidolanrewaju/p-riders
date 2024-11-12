import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';

import Footer from '../components/Footer';
import Loader from '../components/reusable/Loader';
import NavigationBar from '../components/NavigationBar';
import SelectSeatCard from '../layout/SelectSeatCard/SelectSeatCard';

import { getSeat } from '../reducers/selectSeats/selectSeatSlice';

const Seat = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const params = location.state;
  const { seats, origin, loading, destination } = useSelector((state) => state.seat);

  useEffect(() => {
    dispatch(getSeat(params));
  }, [dispatch, params]);

  if (loading || !seats || !origin || !destination) {
    return <Loader />;
  }

  return (
    <>
      <NavigationBar />
      <div className='page-banner bg-riders'>
        <div className='d-table'>
          <div className='d-table-cell'>
            <div className='container'>
              <div className='page-content'>
                <h2 style={{ marginTop: '5px' }}>Pick Your Favourite Seat(s)</h2>
                <ul></ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <SelectSeatCard seats={seats} origin={origin} destination={destination} />
      <Footer />
    </>
  );
};

export default Seat;
