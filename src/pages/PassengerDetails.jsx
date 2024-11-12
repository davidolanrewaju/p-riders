import { useState, useEffect, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';

import Footer from '../components/Footer';
import Loader from '../components/reusable/Loader';
import NavigationBar from '../components/NavigationBar';

import useFormatDate from '../hooks/useFormatDate';

import { selectSeat } from '../reducers/selectedSeat/selectedSeatSlice';
import { signup, login } from '../reducers/authentication/authenticationSlice';

const PassengerDetails = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const loading = useSelector((state) => state.selectedSeat.loading);
  const data = useSelector((state) => state.selectedSeat.selectedSeats);

  const [customerData, setCustomerData] = useState({
    trip_id: 0,
    name: '',
    email: '',
    phone: '',
    address: '',
    password: '',
    confirm: '',
    nok_name: '',
    nok_phone: '',
    noofseats: 1,
    bookingIds: [],
    selectedseats: [],
    passengers: [],
  });

  const [passengerDetail, setPassengerDetail] = useState({
    gender: '',
    name: '',
  });

  const tripDate = data?.trip?.trip_date || null;
  const formattedDate = useFormatDate(tripDate, 'long');

  useEffect(() => {
    if (location.state) {
      dispatch(selectSeat(location.state));
    }
  }, [dispatch, location.state]);

  const passengerDetails = useMemo(() => {
    if (!data || !data.bookingIds) {
      return [];
    }
    return data.bookingIds.map((bookingId) => [bookingId, ...Object.values(passengerDetail)]);
  }, [data, passengerDetail]);

  if (loading || !data || !data.bookings || !data.bookings[0]) {
    return <Loader />;
  }

  const handlePassengerDataChange = (e) => {
    const { name, value } = e.target;
    setPassengerDetail((prevPassengerDetail) => ({
      ...prevPassengerDetail,
      [name]: value,
      name: customerData.name,
    }));
  };

  const handleCustomerDataChange = (e) => {
    const { name, value } = e.target;
    setCustomerData((prevCustomerData) => ({
      ...prevCustomerData,
      trip_id: data.bookings[0].trip.id,
      [name]: value,
      noofseats: [...data.selected_seats].length,
      bookingIds: [...data.bookingIds],
      selectedseats: [...data.selected_seats],
      passengers: [...passengerDetails],
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const signupData = {
      name: customerData.name,
      email: customerData.email,
      phone: customerData.phone,
      address: 'Address',
      password: customerData.phone,
      confirm: customerData.phone,
    };

    try {
      const signupResult = await dispatch(signup(signupData)).unwrap();
      if (signupResult.token) {
        const loginCredentials = {
          email: customerData.email,
          password: customerData.phone,
        };
        await dispatch(login(loginCredentials)).unwrap();
        navigate('/bookings/save', { state: { ...data, customerDetails: customerData } });
      }
    } catch (error) {
      console.error('Signup failed:', error);
      // Attempt login if signup fails (user might already exist)
      try {
        const loginCredentials = {
          email: customerData.email,
          password: customerData.phone,
        };
        await dispatch(login(loginCredentials)).unwrap();
        navigate('/bookings/save', { state: { ...data, customerDetails: customerData } });
      } catch (loginError) {
        console.error('Login failed:', loginError);
      }
    }
  };

  return (
    <>
      <NavigationBar />
      <div className='page-banner bg-riders'>
        <div className='d-table'>
          <div className='d-table-cell'>
            <div className='container'>
              <div className='page-content'>
                <h2 style={{ marginTop: '5px' }}>Enter Passenger(s) Information</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='container'>
        <div className='row'>
          <div className='col-md-6 col-lg-6 offset-lg-3 col-sm-12'>
            <div className='mb-5'>
              <table width='70%' height='40px' className='mt-1 mb-1 text-center table-striped' style={{ margin: 'auto' }}>
                <tbody>
                  <tr>
                    <td colSpan='2' style={{ padding: '5px' }}>
                      <b>You are travelling with:</b>
                      <h5>{data.bookings[0].trip.capacity} Seater</h5>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan='2' style={{ padding: '15px 5px 0' }}>
                      <b>Take off Point:</b>
                      <h5>Abuja</h5>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan='2' style={{ padding: '15px 5px 0' }}>
                      <b>Destination:</b>
                      <h5>Jos</h5>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan='2' style={{ padding: '15px 5px 0' }}>
                      <b>Date of Trip:</b>
                      <h5>{formattedDate}, at {data.trip.trip_time}</h5>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan='2' style={{ padding: '15px 5px 0' }}>
                      <b>Total Amount:</b>
                      <h5>&#8358;{data.bookings[0].trip.amount} for {data.no_of_seats} seat(s)</h5>
                    </td>
                  </tr>
                </tbody>
              </table>

              <form onSubmit={handleSubmit} style={{ paddingTop: '20px' }}>
                <table className='text-start' style={{ margin: 'auto', width: '100%' }}>
                  <tbody>
                    <tr>
                      <td>
                        <hr width='100%' />
                        <h5 className='mb-3'>Seat {data.selected_seats}</h5>

                        <input hidden readOnly type='text' name='passengers[1][]' value='16443' />

                        <div className='form-group row'>
                          <div className='form-group mt-3 col-lg-8 col-sm-12'>
                            Enter Your Full Name
                            <input className='form-control' type='text' name="name" onChange={handleCustomerDataChange} required />
                          </div>

                          <div className='form-group mt-3 col-lg-4 col-sm-12'>
                            Gender
                            <select name="gender" className='form-control' onChange={handlePassengerDataChange} required>
                              <option value=''>-Select Gender-</option>
                              <option value='M'>Male</option>
                              <option value='F'>Female</option>
                            </select>
                          </div>
                        </div>
                      </td>
                    </tr>

                    <tr>
                      <td>
                        <hr width='100%' />
                        <div className='form-group row'>
                          <div className='form-group mt-3 col-12 col-lg-6'>
                            Email
                            <input className='form-control' type='email' name="email" onChange={handleCustomerDataChange} required />
                          </div>

                          <div className='form-group mt-3 col-12 col-lg-6'>
                            Phone
                            <input className='form-control' type='tel' name="phone" onChange={handleCustomerDataChange} required />
                          </div>
                        </div>

                        <div className='form-group row'>
                          <div className='form-group mt-3 col-12 col-lg-6'>
                            Next of Kin Name
                            <input className='form-control' type='text' name="nok_name" onChange={handleCustomerDataChange} required />
                          </div>

                          <div className='form-group mt-3 col-12 col-lg-6'>
                            Next of Kin Phone
                            <input className='form-control' type='tel' name="nok_phone" onChange={handleCustomerDataChange} required />
                          </div>
                        </div>

                        <div className='form-group'>
                          <input type='submit' value='Continue' className='btn btn-success default-btn-one py-3 px-4 float-right mt-3' style={{ float: 'right !important' }} />
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PassengerDetails;
