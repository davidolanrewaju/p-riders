import PropTypes from 'prop-types';

const SelectInput = ({ data, name, optionHeader, onChange, value }) => {
  return (
    <>
      {data && data.length > 0 ? (
        <select name={name} className='form-control' onChange={onChange} value={value} required>
          <option value="">Select {optionHeader}</option>
          {data.map((item) => (
            <option key={item.id} value={item.tag ? item.tag : item.id}>
              {item.location ? `${item.location}` : item.name}
            </option>
          ))}
        </select>
      ) : null}
    </>
  );
};

SelectInput.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      location: PropTypes.string,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
  name: PropTypes.string.isRequired,
  optionHeader: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

export default SelectInput;
