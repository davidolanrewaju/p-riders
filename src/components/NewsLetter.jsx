const NewsLetter = () => {
  return (
    <div className='newsletter-area'>
      <div className='container'>
        <div className='newsletter-content'>
          <div className='row align-items-center'>
            <div className='col-lg-5'>
              <div className='newsletter-title'>
                <h3>Subscribe to our newsletter:</h3>
                <p>Focused on the transport and logistic industry</p>
              </div>
            </div>
            <div className='col-lg-7'>
              <form className='newsletter-form' data-bs-toggle='validator'>
                <input type='email' className='form-control' placeholder='Enter your email' name='EMAIL' required />
                <button type='submit' className='btn btn-primary disabled' style={{ pointerEvents: 'all', cursor: 'pointer' }}>
                  Subscribe
                </button>

                <div id='validator-newsletter' className='form-result'></div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
