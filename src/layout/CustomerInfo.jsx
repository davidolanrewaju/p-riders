import PropTypes from 'prop-types';

const CustomerInfo = ({ customerDetails }) => {
  return (
    <div className='col-lg-4 col-md-6 col-sm-12 pt-3'>
      {/* Section Heading */}
      <div className='section-heading'>
        <h3 className='mb-3'>Account Details</h3>
        <h6>
          <span style={{ fontSize: '12px', color: '#009300' }}>name :</span>
          <br />
          {customerDetails.name}
        </h6>
        <h6>
          <span style={{ fontSize: '12px', color: '#009300' }}>email :</span>
          <br />
          {customerDetails.email}
        </h6>
        <h6>
          <span style={{ fontSize: '12px', color: '#009300' }}>phone :</span>
          <br />
          {customerDetails.phone}
        </h6>
        <h6>
          <span style={{ fontSize: '12px', color: '#009300' }}>N.O.K name :</span>
          <br />
          {customerDetails.nok_name}
        </h6>
        <h6>
          <span style={{ fontSize: '12px', color: '#009300' }}>N.O.K phone :</span>
          <br />
          {customerDetails.nok_phone}
        </h6>
      </div>
    </div>
  );
};

CustomerInfo.propTypes = {
  customerDetails: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    nok_name: PropTypes.string.isRequired,
    nok_phone: PropTypes.string.isRequired,
  }).isRequired,
};

export default CustomerInfo;
