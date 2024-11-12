import PropTypes from 'prop-types';

const CustomerWallet = ({ walletData, customerWalletBalance }) => {
  return (
    <div className='col-lg-12 col-md-12 col-sm-12 pt-3'>
      {/* Section Heading */}
      <div className='section-heading'>
        <h3 className='mb-3'>Wallet</h3>
        <br />

        <h3 className='mb-3'>
          <span className='border border-dark p-2 text-success'>Balance : ₦{customerWalletBalance}</span>
        </h3>

        <br />
        <h5 className='mt-2'>Wallet History</h5>

        <div className='table-responsive'>
          <table className='table table-bordered'>
            <tbody>
              <tr>
                <td style={{ width: '30%', padding: '10px' }}>
                  <b>Date</b>
                </td>
                <td style={{ width: '10%', padding: '10px' }}>
                  <b>Type</b>
                </td>
                <td style={{ width: '10%', padding: '10px' }}>
                  <b>Amount</b>
                </td>
                <td style={{ width: '50%', padding: '10px' }}>
                  <b>Description</b>
                </td>
              </tr>
              {walletData?.map((transaction, index) => (
                <tr key={index}>
                  <td style={{ padding: '10px' }}>{transaction.created_at}</td>
                  <td style={{ padding: '10px' }}>{transaction.type}</td>
                  <td style={{ padding: '10px' }}>₦{transaction.amount}</td>
                  <td style={{ padding: '10px' }}>{transaction.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

CustomerWallet.propTypes = {
  walletData: PropTypes.arrayOf(
    PropTypes.shape({
      created_at: PropTypes.string,
      type: PropTypes.string,
      amount: PropTypes.number,
      description: PropTypes.string,
    })
  ),
  customerWalletBalance: PropTypes.number,
};

export default CustomerWallet;
