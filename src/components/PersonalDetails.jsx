import PropTypes from 'prop-types';
import EmailSvg from "../assets/email.svg";
import MobileSvg from "../assets/mobile.svg";
import LocationSvg from "../assets/location.svg";

function PersonalDetails(props){
    const fullName = props.person.fullName;
    const email = props.person.email;
    const phoneNumber = props.person.phoneNumber;
    const address = props.person.address;
    
    return(<>
        <div className='personalDisplay'>
            <div className="personalName">{fullName}</div>
            <div className="restPersonalDetails">
                {email!='' ? (
                <div className='detail'>
                    <img src={EmailSvg} alt="email icon" width="20px" height="20px"/>
                    {' '}{email}{' '}
                </div>
                ) : (
                    <div>{' '}
                    </div>
                )}
                {phoneNumber!='' ? (
                <div className='detail'>
                    <img src={MobileSvg} alt="mobile icon" width="20px" height="20px"/>
                    {' '}{phoneNumber}{' '}
                </div>
                ) : (
                    <div>{' '}
                    </div>
                )}
                {address!='' ? (
                <div className='detail'>
                    <img src={LocationSvg} alt="address icon" width="20px" height="20px"/>
                    {' '}{address}{' '}
                </div>
                ) : (
                    <div>{' '}
                    </div>
                )}
            </div>
        </div>
    </>)
}
PersonalDetails.propTypes = {
    person: PropTypes.object.isRequired,
    fullName: PropTypes.string,
    email: PropTypes.string,
    phoneNumber:PropTypes.string,
    address:PropTypes.string
}
export default PersonalDetails