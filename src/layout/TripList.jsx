import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import useFormatDate from '../hooks/useFormatDate';
import Loader from '../components/reusable/Loader';

const TripList = ({ tripsData, tripDate, loading }) => {
  const navigate = useNavigate();
  const trips = tripsData?.data;
  const meta = tripsData?.meta;
  const formattedTripDate = useFormatDate(tripDate, 'short');

  // Show loader for loading state or if essential data is missing
  if (loading || !trips?.length || !meta) {
    return <Loader />;
  }

  const tripNoOfSeater = trips[0]?.trip_type || 'Trip';

  // Group trips by time
  const groupedTrips = trips.reduce((acc, trip) => {
    if (!acc[trip.trip_time]) {
      acc[trip.trip_time] = [];
    }
    acc[trip.trip_time].push(trip);
    return acc;
  }, {});

  // Sort time slots
  const sortedTimeSlots = Object.keys(groupedTrips).sort((a, b) => {
    return new Date(`2000/01/01 ${a}`) - new Date(`2000/01/01 ${b}`);
  });

  const handleOnSelect = (id, date) => {
    const params = { ...meta, trip_id: id, date: date };

    navigate(`/bookings/select/seats/${id}`, { state: params });
  };
  return (
    <div className='col-12'>
      <div>
        <h4 style={{ marginTop: '30px', fontSize: '25px' }}>
          {meta.origin.location} to {meta.destination.location}
        </h4>
        <h5 className='text-success text-uppercase mt-1'>{tripNoOfSeater} TRIP</h5>
        <p>
          <b>Date: </b> {formattedTripDate}
        </p>
      </div>
      <div style={{ marginTop: '40px' }} className='table-responsive'>
        <table className='table'>
          <tbody>
            {sortedTimeSlots.map((timeSlot) => (
              <React.Fragment key={timeSlot}>
                <tr>
                  <td colSpan='5' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
                    <h5 className='text-success text-uppercase mt-1 ml-2'>
                      {timeSlot}
                      <span className='text-muted ml-2 text-lowercase' style={{ fontSize: '0.8em' }}>
                        ({groupedTrips[timeSlot].length} {groupedTrips[timeSlot].length === 1 ? 'trip' : 'trips'})
                      </span>
                    </h5>
                  </td>
                </tr>
                {groupedTrips[timeSlot].map((trip, index) => (
                  <tr key={trip.id}>
                    <td style={{ paddingRight: '5px', paddingLeft: '5px' }}>
                      <b>{index + 1}</b>
                    </td>
                    <td style={{ paddingRight: '5px', paddingLeft: '5px' }}>
                      <b>Time: </b>
                      <br />
                      {trip.trip_time}
                    </td>
                    <td style={{ paddingRight: '5px', paddingLeft: '5px' }}>
                      <b>Availability: </b>
                      <br />
                      <a onClick={() => handleOnSelect(trip.id, trip.trip_date)}>
                        <span className={`text-${trip.seats_available > 0 ? 'success' : 'danger'}`}>
                          {trip.seats_available} {trip.seats_available === 1 ? 'seat' : 'seats'} available
                        </span>
                      </a>
                    </td>
                    <td style={{ paddingRight: '5px', paddingLeft: '5px' }}>
                      <b>Amount: </b>
                      <br />₦{Number(trip.amount).toLocaleString()} per&nbsp;seat
                    </td>
                    <td style={{ padding: '5px', paddingLeft: '5px', width: '20px' }}>
                      <b>&nbsp;</b>
                      <br />
                      {trip.seats_available > 0 ? (
                        <a onClick={() => handleOnSelect(trip.id, trip.trip_date)} className='btn btn-sm btn-responsive layout_btn_prevent btn-success'>
                          Select&nbsp;Seats
                        </a>
                      ) : (
                        <button className='btn btn-sm btn-responsive layout_btn_prevent btn-secondary' disabled>
                          Fully Booked
                        </button>
                      )}
                    </td>
                  </tr>
                ))}
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

TripList.propTypes = {
  tripsData: PropTypes.shape({
    data: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        trip_date: PropTypes.string.isRequired,
        trip_time: PropTypes.string.isRequired,
        amount: PropTypes.string.isRequired,
        trip_type: PropTypes.string.isRequired,
        seats_available: PropTypes.number.isRequired,
      })
    ).isRequired,
    meta: PropTypes.shape({
      origin: PropTypes.shape({
        location: PropTypes.string.isRequired,
      }).isRequired,
      destination: PropTypes.shape({
        location: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired,
  }).isRequired,
  tripDate: PropTypes.string.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default TripList;
