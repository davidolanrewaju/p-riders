import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Footer from '../components/Footer';
import CustomerInfo from '../layout/CustomerInfo';
import Loader from '../components/reusable/Loader';
import CustomerWallet from '../layout/CustomerWallet';
import NavigationBar from '../components/NavigationBar';
import CustomerBookings from '../layout/CustomerBookings';

import { fetchCustomerProfile } from '../reducers/customer/myProfileSlice';
import { fetchCustomerWallet } from '../reducers/customer/customerWalletSlice';
import { fetchCustomerBookings } from '../reducers/customer/customerBookingsSlice';

const Profile = () => {
  const dispatch = useDispatch();
  const { customerProfile } = useSelector((state) => state.myProfile);
  const { customerWallet, customerWalletBalance } = useSelector((state) => state.customerWallet);
  const { customerBookings, totalBooking } = useSelector((state) => state.customersBookings);

  const walletData = customerWallet.data;
  const bookingsData = customerBookings.data;
  const customerDetails = customerProfile?.['user profile'];

  useEffect(() => {
    if (!customerDetails || !walletData || !bookingsData) {
      dispatch(fetchCustomerWallet());
      dispatch(fetchCustomerProfile());
      dispatch(fetchCustomerBookings());
    }
  }, [dispatch, customerDetails, walletData, bookingsData]);

  if (!customerDetails || !walletData) {
    return <Loader />;
  }

  return (
    <>
      <NavigationBar />
      <main className='py-4'>
        <style>
          {`
            .modal-backdrop {
              z-index: -1;
            }
          `}
        </style>

        <section className='contact-area section-padding-75-0 position-relative' id='book' style={{ margin: '150px 0 100px 0px' }}>
          <div className='container'>
            <div className='row align-items-center justify-content-between'>
              <CustomerInfo customerDetails={customerDetails} />
              <CustomerWallet walletData={walletData} customerWalletBalance={customerWalletBalance} />
              <CustomerBookings bookingsData={bookingsData} totalBooking={totalBooking} />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Profile;
