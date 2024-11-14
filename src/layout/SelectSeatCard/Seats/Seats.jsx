/* eslint-disable react/prop-types */
import SevenSeater from './SevenSeater/SevenSeater';
import TwelveSeater from './TwelveSeater/TwelveSeater';
import FiveSeater from './FiveSeater/FiveSeater';
import NineSeater from './NineSeater/NineSeater';

const Seats = (props) => {
  const { trip_type, handleSelectedSeat, updatedData } = props;

  if (trip_type === '5 seater') {
    return <FiveSeater handleSelectedSeat={handleSelectedSeat} updatedData={updatedData} />;
  } else if (trip_type === '7 seater') {
    return <SevenSeater handleSelectedSeat={handleSelectedSeat} updatedData={updatedData} />;
  } else if (trip_type === '9 seater') {
    return <NineSeater handleSelectedSeat={handleSelectedSeat} updatedData={updatedData} />;
  } else if (trip_type === '12 seater') {
    return <TwelveSeater handleSelectedSeat={handleSelectedSeat} updatedData={updatedData} />;
  }

  return <div>Invalid seat configuration</div>;
};

export default Seats;
