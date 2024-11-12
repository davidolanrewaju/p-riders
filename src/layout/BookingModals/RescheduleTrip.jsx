import { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { fetchRescheduledBookingData } from '../../reducers/rescheduleBooking/rescheduleBookingSlice';

const RescheduleTrip = ({ bookingId, bookingName, rescheduleModal, showRescheduleModal }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [input, setInput] = useState({ date: '', phone: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };

  const handleClose = () => {
    showRescheduleModal(false);
    setInput({ date: '', phone: '' });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const rescheduleBookingInfo = {
      date: input.date,
      phone: input.phone,
      booking_id: Number(bookingId),
    };
    console.log(rescheduleBookingInfo);

    const resultAction = await dispatch(fetchRescheduledBookingData(rescheduleBookingInfo));
    if (fetchRescheduledBookingData.fulfilled.match(resultAction)) {
      navigate(`/bookings/reschedule/${bookingId}`, { state: { ...resultAction.payload } });
    } else {
      showRescheduleModal(false);
    }
  };

  return (
    <div id={`rescheduleTrip${bookingId}`} className={`modal fade ${rescheduleModal ? 'show' : ''}`} data-backdrop='false' role='dialog' style={{ display: rescheduleModal ? 'block' : 'none' }}>
      <div className='modal-dialog modal-dialog-centered'>
        <div className='modal-content'>
          <div className='modal-header'>
            <h5 className='modal-title'>Reschedule Trip:</h5>
            <button type='button' className='close' onClick={handleClose} aria-label='Close'>
              <span aria-hidden='true'>×</span>
            </button>
          </div>
          <div className='modal-body'>
            <span className='text-success'>{bookingName}</span>
            <form onSubmit={onSubmit}>
              <div className='form-group'>
                <label>Select New Travel Date</label>
                <input type='date' className='form-control mt-2' name='date' value={input.date} onChange={handleInputChange} required />
              </div>

              <div className='form-group'>
                <label>
                  Enter Phone number on the Booking
                  <br />
                  <span className='text-danger'>to verify that you are authorized to carry out this operation</span>
                </label>
                <input type='tel' className='form-control mt-2' name='phone' value={input.phone} onChange={handleInputChange} required />
              </div>

              <div className='modal-footer'>
                <button type='button' className='btn alazea-btn2 btn-outline-dark active mt-15' onClick={handleClose}>
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

RescheduleTrip.propTypes = {
  token: PropTypes.string,
  bookingId: PropTypes.number.isRequired,
  bookingName: PropTypes.string.isRequired,
  rescheduleModal: PropTypes.bool.isRequired,
  showRescheduleModal: PropTypes.func.isRequired,
};

export default RescheduleTrip;
