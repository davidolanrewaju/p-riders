import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import Carousel from '../components/Carousel';
import HomeAbout from '../components/HomeAbout';
import Loader from '../components/reusable/Loader';
import SelectInput from '../components/reusable/SelectInput';

// Reducers Import
import { getVehicles } from '../reducers/vehicle/vehicleSlice';
import { getLocationsTo } from '../reducers/location/locationToSlice';
import { getLocationsFrom } from '../reducers/location/locationFromSlice';

const BookingSection = ({ error }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const vehicles = useSelector((state) => state.vehicleType.vehiclesType.data);
  const locationsTo = useSelector((state) => state.locationTo.locationsTo.data);
  const locationsFrom = useSelector((state) => state.locationFrom.locationsFrom.data);

  const [formData, setFormData] = useState({
    date: new Date().toISOString().split('T')[0],
    no_of_seats: 1,
    origin: 0,
    destination: 0,
    type: 'regular',
  });
  const [dateError, setDateError] = useState('');

  useEffect(() => {
    dispatch(getVehicles());
    dispatch(getLocationsTo());
    dispatch(getLocationsFrom());
  }, [dispatch]);

  const getFilteredDestinations = () => {
    if (!locationsTo) return [];
    return locationsTo.filter((location) => location.id !== formData.origin);
  };

  // Update the loader check to handle null/undefined cases
  if (!vehicles || !locationsTo || !locationsFrom) {
    return <Loader />;
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: name === 'origin' || name === 'destination' ? parseInt(value) : name === 'no_of_seats' ? parseInt(value) : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const today = new Date().toISOString().split('T')[0];
    if (formData.date < today) {
      setDateError((prevState) => ({
        ...prevState,
        dateErr: 'Cannot book for past dates',
      }));
      return;
    }
    navigate('/bookings/select/vehicles', { state: formData });
  };

  return (
    <main className='py-4'>
      <div className='container'>
        <div className='row'>
          <Carousel />
          <div className='col-lg-6' style={{ marginTop: '80px' }} id='bookingForm'>
            <div className='container'>
              <div className='row align-items-center'>
                <div className='order-form mt-5'>
                  <h2 className='mt-1 text-center'>Book Your Ride</h2>
                  <div className='mt-1 mx-auto'>
                    <div className='tab-content' id='pills-tabContent'>
                      <div className='col-lg-8 mx-auto tab-pane fade show active' id='pills-departure' aria-labelledby='pills-departure-tab' role='tabpanel'>
                        {error && <div className='alert alert-danger'>{error}</div>}
                        <form className='w-100' onSubmit={handleSubmit}>
                          <div className='form-group w-100 mt-5'>
                            <label htmlFor='' className='label'>
                              Take Off Point
                            </label>
                            <div className=''>
                              <SelectInput name='origin' data={locationsFrom} optionHeader='Select Terminal' onChange={handleInputChange} value={formData.origin} required />
                            </div>
                          </div>

                          <div className='form-group w-100 mt-3'>
                            <label htmlFor='' className='label'>
                              Destination
                            </label>
                            <div className=''>
                              <SelectInput name='destination' data={getFilteredDestinations()} optionHeader='Select Terminal' onChange={handleInputChange} value={formData.destination} required />
                            </div>
                          </div>

                          <div className='form-group w-100 mt-4'>
                            <label htmlFor='' className='label'>
                              Vehicle Type
                            </label>
                            <div className='select-wrap'>
                              <SelectInput name='type' data={vehicles} optionHeader='Select Vehicle Type' onChange={handleInputChange} value={formData.type} required />
                            </div>
                          </div>

                          <div className='form-group w-100 mt-4'>
                            <label htmlFor='' className='label'>
                              Passengers
                            </label>
                            <input type='number' className='form-control w-100' name='no_of_seats' min='1' onChange={handleInputChange} value={formData.no_of_seats} required />
                          </div>

                          <div className='form-group w-100 mt-4'>
                            <label htmlFor='departure' className='label'>
                              Departure Date
                            </label>
                            <input type='date' className='form-control w-100' name='date' placeholder='Departure Date' onChange={handleInputChange} value={formData.date} required />
                            <p className='text-red'>{dateError}</p>
                          </div>

                          <div className='form-group mt-4'>
                            <input type='submit' value='Search Available Rides' style={{ float: 'right' }} className='btn btn-success default-btn-one' />
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <HomeAbout />
    </main>
  );
};

BookingSection.propTypes = {
  error: PropTypes.string,
};

export default BookingSection;
