/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

import Seats from './Seats/Seats';
import useFormatDate from '../../hooks/useFormatDate';
import TermsAndCondition from '../TermsAndCondition';

const SelectSeatCard = ({ seats, origin, destination }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [selectedSeat, setSelectedSeat] = useState({
    amount: 0,
    noofseats: 0,
    seats: [],
    trip_id: 0,
  });
  const [seatError, setSeatError] = useState('');
  const [shouldRefresh, setShouldRefresh] = useState(false);
  const [isModal, setIsModal] = useState(false);
  const tripDate = seats.trip.trip_date || null;
  const formatDate = useFormatDate(tripDate);

  useEffect(() => {
    let timer;
    if (shouldRefresh) {
      timer = setTimeout(() => {
        navigate(location.pathname, {
          state: location.state,
          replace: true,
        });
      }, 1000);
    }
    return () => clearTimeout(timer);
  }, [shouldRefresh, navigate, location]);

  const handleSelectedSeat = (seatInfo) => {
    const requestedSeats = parseInt(seats.no_of_seats);
    const selectedSeats = seatInfo.no_of_seats;

    setSelectedSeat((prevState) => ({
      ...prevState,
      seats: seatInfo.seats,
      noofseats: seatInfo.no_of_seats,
      amount: seatInfo.amount,
      trip_id: seatInfo.trip_id,
    }));

    // Only trigger refresh if user selects MORE seats than allowed
    if (selectedSeats > requestedSeats) {
      setSeatError(`Please select exactly ${requestedSeats} seat(s)`);
      setShouldRefresh(true);
    } else {
      setSeatError('');
      setShouldRefresh(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedSeat.noofseats === parseInt(seats.no_of_seats)) {
      navigate('/bookings/details', { state: selectedSeat });
    } else {
      setSeatError(`Please select exactly ${seats.no_of_seats} seat(s)`);
    }
  };

  const handleModal = () => {
    setIsModal(!isModal);
  };

  return (
    <>
      <div className='container'>
        <div className='row'>
          <div className='mx-auto col-12 col-sm-8 col-md-7 col-lg-6 col-xl-5 p-2'>
            <div>
              <div className='map-area mb-100'>
                <form onSubmit={handleSubmit}>
                  <div className='p-2 text-center'>
                    <table className='mt-1 mb-1 text-center table-striped' style={{ margin: 'auto', height: '40px', width: '70%' }}>
                      <tbody>
                        <tr>
                          <td colSpan='2' style={{ paddingRight: '5px', paddingLeft: '5px' }}>
                            <b>You are travelling with: </b>
                            <h5>{seats.trip.trip_type}</h5>
                          </td>
                        </tr>
                        <tr>
                          <td colSpan='2' style={{ paddingTop: '15px', paddingRight: '5px', paddingLeft: '5px' }}>
                            <b>Take of Point: </b>
                            <h5>{origin.location}</h5>
                          </td>
                        </tr>
                        <tr>
                          <td colSpan='2' style={{ paddingTop: '15px', paddingRight: '5px', paddingLeft: '5px' }}>
                            <b>Destination: </b>
                            <h5>{destination.location}</h5>
                          </td>
                        </tr>
                        <tr>
                          <td colSpan='2' style={{ paddingTop: '15px', paddingRight: '5px', paddingLeft: '5px' }}>
                            <b>Date of Trip: </b>
                            <h5>
                              {formatDate}, at {seats.trip.trip_time}
                            </h5>
                          </td>
                        </tr>
                        <tr>
                          <td colSpan='2' style={{ paddingTop: '15px', paddingRight: '5px', paddingLeft: '5px' }}>
                            <b>Total Amount: </b>
                            <h5>
                              ₦{seats.amount} for {seats.no_of_seats} seat(s)
                            </h5>
                          </td>
                        </tr>{' '}
                      </tbody>
                    </table>
                    <table border='0' className='mt-3 mb-3 text-center' style={{ margin: 'auto', height: '10px', width: '30%' }}>
                      <tbody>
                        <tr>
                          <td style={{ width: '10%' }} className='bg-danger'>
                            <p className='text-center text-white' style={{ fontSize: '12px', padding: '5px' }}>
                              Booked
                            </p>
                          </td>

                          <td style={{ width: '10%' }} className='bg-dark'>
                            <p className='text-center text-white' style={{ fontSize: '12px', padding: '5px' }}>
                              Available
                            </p>
                          </td>

                          <td style={{ width: '10%' }} className='bg-success'>
                            <p className='text-center text-white' style={{ fontSize: '12px', padding: '5px' }}>
                              Selected
                            </p>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <div className='text-center'>
                      {!seatError ? null : (
                        <p className='text-danger' style={{ fontSize: '16px', padding: '5px' }}>
                          Select Maximum of {seats.no_of_seats} Seat(s)
                        </p>
                      )}
                    </div>
                    <div>
                      <div className='text-center m-2 p-3 p-md-5'>
                        <Seats updatedData={seats} trip_type={seats.trip.trip_type} handleSelectedSeat={handleSelectedSeat} />

                        <div>
                          <table align='center' style={{ margin: 'auto', marginTop: '15px', width: '90%' }}>
                            <tbody>
                              <tr>
                                <td className='w-100 d-flex justify-content-center align-items-center'>
                                  <input type='checkbox' name='tandc' required />
                                  <div className='text-start'>
                                    <p className='m-0'>
                                      I have read and agree to the{' '}
                                      <a className='text-danger' onClick={handleModal}>
                                        terms and conditions
                                      </a>{' '}
                                      of service
                                    </p>
                                  </div>
                                  <TermsAndCondition isModal={isModal} handleModal={handleModal} />
                                </td>
                              </tr>
                              <tr>
                                <td className='text-center'>
                                  {' '}
                                  <div className='form-group'>
                                    <button type='submit' disabled={selectedSeat.noofseats !== parseInt(seats.no_of_seats)} className='btn btn-success default-btn-one py-3 px-4'>
                                      Continue
                                    </button>
                                  </div>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SelectSeatCard;
