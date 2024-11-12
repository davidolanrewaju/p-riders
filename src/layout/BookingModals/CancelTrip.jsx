import { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import { fetchBookingCancelMessage } from '../../reducers/cancelBooking/cancelBookingSlice';

const CancelTrip = ({ bookingId, token, showCancelModal, setShowCancelModal }) => {
  const dispatch = useDispatch();
  const [number, setNumber] = useState('');

  const handleNumberChange = (e) => {
    const { value } = e.target;
    setNumber(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const cancelBookingInfo = {
      token,
      body: {
        phone: number,
        booking_id: bookingId,
      },
    };
    dispatch(fetchBookingCancelMessage(cancelBookingInfo));
    setShowCancelModal(false);
  };

  return (
    <div id={`cancelTrip${bookingId}`} className={`modal fade ${showCancelModal ? 'show' : ''}`} data-backdrop='false' role='dialog'>
      <div className='modal-dialog modal-dialog-centered'>
        <div className='modal-content'>
          <div className='modal-header'>
            <h5 className='modal-title'>Cancel Booking:</h5>
            <button type='button' className='close' data-bs-dismiss='modal' aria-label='Close'>
              <span aria-hidden='true'>×</span>
            </button>
          </div>
          <div className='modal-body'>
            <form onSubmit={handleSubmit}>
              <input type='hidden' name='_token' value={token} autoComplete='off' />
              <input type='hidden' name='booking_id' value={bookingId} />

              <div className='form-group'>
                <h6>
                  Enter Phone number on the Booking
                  <br />
                  <span className='text-danger'>to verify that you are authorized to carry out this operation</span>
                </h6>
                <input type='tel' className='form-control' name='phone' value={number} onChange={handleNumberChange} required />
              </div>

              <div className='modal-footer'>
                <button type='button' className='btn alazea-btn2 btn-outline-dark active mt-15' data-bs-dismiss='modal' onClick={() => setShowCancelModal(false)}>
                  Close
                </button>
                <button type='submit' className='btn alazea-btn2 btn-success mt-15'>
                  Continue
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

CancelTrip.propTypes = {
  bookingId: PropTypes.number.isRequired,
  token: PropTypes.string.isRequired,
  showCancelModal: PropTypes.bool.isRequired,
  setShowCancelModal: PropTypes.func.isRequired,
};

export default CancelTrip;
