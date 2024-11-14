import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import Footer from '../components/Footer';
import NavigationBar from '../components/NavigationBar';
import useMonnify from '../hooks/useMonnify';

import { postCustomerInfoData } from '../reducers/customerInfo/customerInfoSlice';

const Payment = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const customerData = location.state;
  const response = useSelector((state) => state.customerInfo.customerInfoData);

  useEffect(() => {
    if (customerData?.customerDetails) {
      dispatch(postCustomerInfoData(customerData.customerDetails));
    }
  }, [dispatch, customerData]);

  const monnifyOptions = {
    apiKey: response.monnify_api_key,
    contractCode: response.monnify_contract_code,
    amount: response.amount,
    customerName: customerData.customerDetails.name,
    customerEmail: response.email,
    reference: response.reference_number,
    onSuccess: (response) => console.log('Payment successful', response),
    onError: (error) => console.log('Payment failed', error),
  }

  const { isLoading, initializePayment } = useMonnify(monnifyOptions);

  return (
    <>
      <NavigationBar />
      <main className='py-4'>
        {/* Page banner Area */}
        <div className='page-banner bg-riders'>
          <div className='d-table'>
            <div className='d-table-cell'>
              <div className='container'>
                <div className='page-content'>
                  <h2 style={{ marginTop: '5px' }}>Preview &amp; Pay</h2>
                  <ul></ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='container'>
          <div className='row'>
            <div className='col-md-12 col-lg-12 col-sm-12'>
              <div className='mb-5'>
                <div className='text-center'>
                  <div className='table-responsive'>
                    <table className='table-striped text-center' style={{ margin: 'auto' }}>
                      <tbody>
                        <tr>
                          <td colSpan='2' style={{ paddingTop: '15px', paddingRight: '5px', paddingLeft: '5px' }}>
                            <b>Total Amount: </b>
                            <h5>
                              &#8358;{customerData.bookings[0].trip.amount} for {customerData.no_of_seats} seat(s)
                            </h5>
                          </td>
                        </tr>

                        {/* Uncomment this if you want to display the reference code */}
                        {/* <tr height="80px">
                            <td colSpan="2" style={{ paddingRight: '5px', paddingLeft: '5px', textAlign: 'center' }}>
                              <h6 className="text-success">PESD1730889393756</h6>
                            </td>
                          </tr> */}

                        <tr>
                          <td colSpan='2' style={{ paddingTop: '15px', paddingRight: '5px', paddingLeft: '5px' }}>
                            <b>Passenger: </b>
                            <br />
                            {customerData.customerDetails.name}
                          </td>
                        </tr>

                        <tr>
                          <td colSpan='2' style={{ paddingTop: '35px', paddingRight: '5px', paddingLeft: '5px' }}>
                            <h5>Select Payment Method: </h5>
                            <span style={{ fontSize: '14px' }}>click only once and wait for the payment modal</span>
                          </td>
                        </tr>

                        <tr height='80px'>
                          <td style={{ paddingTop: '15px', paddingRight: '5px', paddingLeft: '5px', textAlign: 'center' }} className='justify-content-center'>
                            <div className='p-container' style={{ marginTop: '30px' }}>
                              <div className='row'>
                                <div className='col-12 text-left'>
                                  <button onClick={initializePayment} disabled={isLoading} className='btn payment-btn' style={{ borderColor: '#00B8C2' }} id='monnify-btn' name='type' value='monnify' type='submit'>
                                    {isLoading ? 'Processing Payment... ' : 'Click to Pay with '}
                                    <img src='/img/gateway/monify.png' height='20px' alt='monnify' className='payment-icon' />
                                  </button>
                                </div>
                                <div className='col-12' style={{ paddingTop: '30px', fontSize: '14px' }}>
                                  <a href='/' className='link-secondary mt-3'>
                                    or would you like to Start Over?
                                  </a>
                                </div>
                              </div>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <h2>&nbsp;</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Payment;
