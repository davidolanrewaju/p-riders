const Loader = () => {
  return (
    <>
      {/* Preloader */}
      <div className='preloader'>
        <div className='d-table'>
          <div className='d-table-cell'>
            <div className='lds-ring'>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
      {/* End Preloder */}
    </>
  );
};

export default Loader;
