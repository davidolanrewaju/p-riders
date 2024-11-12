import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';

import RescheduleTrip from './BookingModals/RescheduleTrip';
import CancelTrip from './BookingModals/CancelTrip';

const CustomerBookings = ({ bookingsData, totalBooking }) => {
  const [bookingId, setBookingId] = useState(0);
  const [bookingName, setBookingName] = useState('');
  const [cancelModal, showCancelModal] = useState(false);
  const [rescheduleModal, showRescheduleModal] = useState(false);
  const [rescheduleError, setRescheduleError] = useState(null);
  const [cancelMessage, setCancelMessage] = useState(null);
  const rescheduleBookingState = useSelector((state) => state.rescheduleBooking);
  const { message } = useSelector((state) => state.cancelBooking);
  const token = useSelector((state) => state.authentication.token);
  const formatDate = (inputDate, format) => {
    const date = new Date(inputDate);

    if (format === 'short') {
      const day = date.getDate();
      const month = date.toLocaleString('default', { month: 'short' });
      const year = date.getFullYear();

      return `${day} ${month} ${year}`;
    } else {
      const weekday = date.toLocaleDateString('default', { weekday: 'short' });
      const day = date.toLocaleDateString('default', { day: 'numeric' });
      const month = date.toLocaleString('default', { month: 'short' });
      const year = date.getFullYear();

      return `${weekday} ${day} ${month} ${year}`;
    }
  };

  useEffect(() => {
    if (rescheduleBookingState.error) {
      setRescheduleError(rescheduleBookingState.error);
    }
  }, [rescheduleBookingState.error]);

  useEffect(() => {
    setCancelMessage(message);
    if (message) {
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    }
  }, [message]);

  const handleBookingReschedule = (name, id) => {
    setCancelMessage(null);
    setRescheduleError(null);
    showRescheduleModal(!rescheduleModal);
    setBookingName(name);
    setBookingId(id);
  };

  const handleBookingCancel = (id) => {
    showCancelModal(!cancelModal);
    setBookingId(id);
  };

  return (
    <>
      <div className='col-lg-12 col-md-12 col-sm-12 pt-3'>
        {/* Section Heading */}
        <div className='section-heading'>
          <h3 className='mb-3'>Bookings</h3>
          <h6>
            <span style={{ fontSize: '12px', color: '#009300' }}>Total Bookings :</span>
            <br />
            {totalBooking}
          </h6>

          <br />
          <h5 className='mt-2'>Booking History</h5>

          {rescheduleError && (
            <div className='alert alert-danger' role='alert'>
              {rescheduleError}
            </div>
          )}
          {cancelMessage && (
            <div className='alert alert-success' role='alert'>
              {cancelMessage}
            </div>
          )}

          <div className='table-responsive'>
            <table className='table table-bordered'>
              <tbody>
                <tr>
                  <td style={{ width: '13%', padding: '10px' }}>
                    <b>Booking Date</b>
                  </td>
                  <td style={{ width: '15%', padding: '10px' }}>
                    <b>Trip Date</b>
                  </td>
                  <td style={{ width: '13%', padding: '10px' }}>
                    <b>Route</b>
                  </td>
                  <td style={{ width: '20%', padding: '10px' }}>
                    <b>Name</b>
                  </td>
                  <td style={{ width: '5%', padding: '10px' }}>
                    <b>Reference</b>
                  </td>
                  <td style={{ width: '5%', padding: '10px' }}>
                    <b>Amount</b>
                  </td>
                  <td style={{ width: '5%', padding: '10px' }}>
                    <b>Status</b>
                  </td>
                  <td style={{ width: '5%', padding: '10px' }} className='text-center' colSpan='3'>
                    <b>Action</b>
                  </td>
                </tr>
                {bookingsData && bookingsData.length > 0 ? (
                  bookingsData.map((booking, index) => (
                    <tr key={index}>
                      <td style={{ padding: '5px' }}>
                        {formatDate(booking.bookingDate, 'short')}
                        <br />
                        {booking.trip?.estimated_time || ''}
                      </td>
                      <td style={{ padding: '5px' }}>
                        {formatDate(booking.trip?.['trip date'], 'short')}
                        <br />
                        {booking.trip?.['trip time']}
                      </td>
                      <td style={{ padding: '5px' }}>
                        {booking.route}
                        <br />
                        <span style={{ fontSize: '12px', color: '#009300' }}>{booking?.['trip type']}</span>
                      </td>
                      <td style={{ padding: '5px' }}>{booking.gender}</td>
                      <td style={{ padding: '5px' }}>{booking?.['reference number']}</td>
                      <td style={{ padding: '5px' }}>₦{booking.trip?.amount}</td>
                      <td style={{ padding: '5px' }} className='text-secondary'>
                        {booking.status?.name || ''}
                      </td>
                      <td style={{ padding: '5px' }} className='text-center'></td>
                      <td>
                        <a onClick={() => handleBookingReschedule(booking.name, booking.id)} href='#' className='btn btn-sm btn-outline-info mt-1 mr-1 ml-2' data-bs-toggle='modal' data-bs-target={`#rescheduleTrip${booking.id}`}>
                          Reschedule
                        </a>
                      </td>
                      <td>
                        <a onClick={() => handleBookingCancel(booking.id)} href='#' className='btn btn-outline-dark btn-sm mt-1 mr-1 ml-2' data-bs-toggle='modal' data-bs-target={`#cancelTrip${booking.id}`}>
                          Cancel Trip
                        </a>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan='10' className='text-center'>
                      No bookings found
                    </td>
                  </tr>
                )}
              </tbody>
            </table>

            <div style={{ textAlign: 'right', width: '100%' }}></div>
          </div>
        </div>
      </div>
      <RescheduleTrip token={token} bookingId={bookingId} bookingName={bookingName} rescheduleModal={rescheduleModal} showRescheduleModal={showRescheduleModal} />
      <CancelTrip token={token} bookingId={bookingId} showCancelModal={cancelModal} setShowCancelModal={showCancelModal} />
    </>
  );
};

CustomerBookings.propTypes = {
  bookingsData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      bookingDate: PropTypes.string,
      name: PropTypes.string,
      route: PropTypes.string,
      reference_number: PropTypes.string,
      trip: PropTypes.shape({
        trip_date: PropTypes.string,
        trip_time: PropTypes.string,
        amount: PropTypes.string,
        estimated_time: PropTypes.string,
        trip_type: PropTypes.string,
      }),
      status: PropTypes.shape({
        name: PropTypes.string,
      }),
    })
  ),
  totalBooking: PropTypes.number,
};

export default CustomerBookings;
