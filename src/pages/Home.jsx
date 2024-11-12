import { useLocation } from 'react-router-dom';

import Footer from '../components/Footer';
import BookingSection from '../layout/BookingSection';
import NavigationBar from '../components/NavigationBar';

const Home = () => {
  const location = useLocation();
  const error = location.state?.error;

  return (
    <>
      <NavigationBar />
      <BookingSection error={error} />
      <Footer />
    </>
  );
};

export default Home;
