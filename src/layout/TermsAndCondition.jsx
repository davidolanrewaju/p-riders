import PropTypes from 'prop-types';

const TermsAndCondition = ({ isModal, handleModal }) => {
  const handleOutsideClick = (e) => {
    if (e.target.className === 'modal show') {
      handleModal();
    }
  };

  return (
    <div onClick={handleOutsideClick} className={`modal ${isModal ? 'show' : ''}`} style={{display: isModal ? 'block' : 'none'}} tabIndex='-1' aria-labelledby='termsandcondl' aria-modal='true' role='dialog'>
      <div className='modal-dialog'>
        <div className='modal-content'>
          <div className='modal-body'>
            <style>
                {`
                    section {
                        line-height: 1.08;
                        font-family: Calibri, sans-serif;
                        font-size: 14pt;
                    }
                    p {
                        margin: 0 0 10pt;
                    }
                    li {
                        margin-top: 0;
                        margin-bottom: 10pt;
                    }
                    .BodyTextIndent2 {
                        margin-left: 72pt;
                        text-indent: -36pt;
                        text-align: justify;
                        font-family: 'Times New Roman', serif;
                        font-size: 12pt;
                    }
                    .ListParagraph {
                        margin-left: 36pt;
                        line-height: 1.08;
                        font-size: 11pt;
                    }
                    .Header {
                        line-height: 1.05;
                        font-family: 'Times New Roman', serif;
                        font-size: 12pt;
                    }
                `}
            </style>

            <section>
              <p>
                <strong>NAME OF COMPANY: PLATEAU EXPRESS SERVICES LTD</strong>
              </p>
              <p>
                <strong>General Terms and Conditions</strong>
              </p>
              <p>The transportation of passengers and baggage shall be carried out under the following terms and conditions:</p>

              <p>
                <strong>Article 1</strong>
              </p>
              <ol style={{listStyleType: 'lower-latin', paddingLeft: '0'}}>
                <li className='ListParagraph'>{"The Company"} refers to Plateau Express Services Ltd.</li>
                <li className='ListParagraph'>{"Passenger"} refers to a person who is not a company driver, and who is or will be transported by a vehicle upon his or her consent.</li>
                <li className='ListParagraph'>{"Transport"} is the synonym of transportation and refers to the road transportation of passengers or baggage for a fee or a price.</li>
                <li className='ListParagraph'>{"Fare"} refers to road transport fare set by the Company.</li>
                <li className='ListParagraph'>{"Contract terms"} refers to the clauses that are included in the ticket or clauses written in the notice and in these terms and conditions.</li>
                <li className='ListParagraph'>{"Baggage"} refers to the articles the passenger carries into the vehicle, or the baggage that goes into the boot of the vehicle.</li>
                <li className='ListParagraph'>{"Child"} refers to a passenger under 12 years of age.</li>
                <li className='ListParagraph'>{"Destination"} refers to the final arriving point in accordance with the transport contract.</li>
                <li className='ListParagraph'>{"Force Majeure"} refers to cases caused by an unavoidable and unforeseeable circumstance.</li>
                <li className='ListParagraph'>{"Damages"} include death, injury, delays, loss or equivalent that occur in association with the road transport or its related services.</li>
              </ol>

              <p>
                <strong>Article 2</strong>
              </p>
              <ol style={{ listStyleType: 'lower-latin', paddingLeft:'0' }}>
                <li className='ListParagraph'>These terms and conditions shall apply to the transport of passengers and baggage, and related services carried out by the Company.</li>
                <li className='ListParagraph'>The transportation of all passengers and baggage shall be carried out under the terms and conditions for transport and other applicable tariffs in place as of the day on which the trip starts with the initial boarding ticket.</li>
                <li className='ListParagraph'>Changes due to changes in applicable law, government rules, or service improvements may be made without notice.</li>
                <li className='ListParagraph'>In accordance with the code of shared agreements signed with other transport companies, the Company may sell tickets issued under its name for journeys undertaken by another operator.</li>
                <li className='ListParagraph'>For the transport of passengers and baggage on legs for which the company sells tickets under its own name, these terms and conditions shall apply.</li>
              </ol>

              <p>
                <strong>Article 3</strong>
              </p>
              <p>
                <strong>Responsibility of the Company</strong>
              </p>
              <ol style={{ listStyleType: 'lower-latin', paddingLeft: '0' }}>
                <li className='ListParagraph'>Provide roadworthy vehicles in very good condition and well-maintained for transportation of passengers and their baggage.</li>
                <li className='ListParagraph'>Making all efforts to complete transportation without transshipment.</li>
                <li className='ListParagraph'>Delivering passengers and baggage to their destination.</li>
                <li className='BodyTextIndent2'>Supplying own materials and supplies (vehicles, fuel, driver, and upkeep) that will be necessary to perform the service under this agreement.</li>
                <li className='BodyTextIndent2'>Perform the service with the highest standard of professional ethical competency and integrity.</li>
                <li className='BodyTextIndent2'>The payment of any taxes, dues, or fees required by law to be paid to a government or any local authority to ensure hitch-free movement of vehicles.</li>
                <li className='BodyTextIndent2'>All vehicles shall depart only when fully loaded. The Company has no fixed departure time and shall not be liable for the same.</li>
                <li className='ListParagraph'>The Company will ensure that the vehicles are fully insured to their value and against normal risks (fire, theft, and third-party liability).</li>
              </ol>

              <p>
                <strong>Article 4</strong>
              </p>
              <p>
                <strong>Responsibility of Passenger</strong>
              </p>
              <ol style={{ listStyleType: 'lower-latin', paddingLeft: '0' }}>
                <li className='ListParagraph'>The first duty of the passenger is to pay the approved transport fare and obtain a ticket for the same.</li>
                <li className='ListParagraph'>The passenger shall ensure that direct payments are made at the approved points. The company shall not be liable for any payment not made via the approved points or personnel.</li>
                <li className='ListParagraph'>The passenger shall be responsible for proper marking of his/her own baggage, and is duty bound to at all times maintain vigilance over his/her baggage. The Company shall not be liable to pay damages for lost baggage.</li>
                <li className='ListParagraph'>All children must be accompanied by adults. The company shall not be responsible for unaccompanied minors or children.</li>
                <li className='ListParagraph'>
                  The Company does not run courier services and shall not be liable for damages to all waybills not properly registered and officially paid for. Private arrangements for courier services between individuals and company staff are against company policy.
                </li>
              </ol>

              <p className='BodyTextIndent2'>
                <strong>Article 5</strong>
              </p>
              <p className='BodyTextIndent2'>
                <strong>Force Majeure</strong>
              </p>
              <p className='Header'>
                If, through {"force majeure"} (government embargo, war, blockages, revolution, insurrection, mobilization, strikes, lockouts, riots, other extraordinary civil disturbances, and/or an act of God), the Company is unable to perform its obligations under these terms and conditions, no
                penalties will attach to the Company.
              </p>

              <p className='Header'>
                <strong>Article 6</strong>
              </p>
              <p>
                <strong>Arbitration</strong>
              </p>
              <p style={{ marginLeft:'18pt' }}>
                These terms and conditions shall be governed by the Laws of the Federal Republic of Nigeria, and any controversy or claim arising out of or relating to these terms and conditions that remains unresolved after negotiation shall be settled by binding arbitration before the Plateau
                State Multi-Door Court.
              </p>
            </section>
          </div>
          <div className='modal-footer'>
            <button onClick={handleModal} type='button' className='btn btn-secondary' data-bs-dismiss='modal'>
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

TermsAndCondition.propTypes = {
  isModal: PropTypes.bool.isRequired,
  handleModal: PropTypes.func.isRequired
};

export default TermsAndCondition;
