import PropTypes from 'prop-types';
import EmailSvg from "../assets/email.svg";
import MobileSvg from "../assets/mobile.svg";
import LocationSvg from "../assets/location.svg";

function PersonalDetails(props){
    return(<>
        <div className='personalDisplay'>
            <div className="personalName">{props.fullName}</div>
            <div className="restPersonalDetails">
                {props.email!='' ? (
                <div className='detail'>
                    <img src={EmailSvg} alt="email icon" width="20px" height="20px"/>
                    {' '}{props.email}{' '}
                </div>
                ) : (
                    <div>{' '}
                    </div>
                )}
                {props.phoneNumber!='' ? (
                <div className='detail'>
                    <img src={MobileSvg} alt="mobile icon" width="20px" height="20px"/>
                    {' '}{props.phoneNumber}{' '}
                </div>
                ) : (
                    <div>{' '}
                    </div>
                )}
                {props.address!='' ? (
                <div className='detail'>
                    <img src={LocationSvg} alt="address icon" width="20px" height="20px"/>
                    {' '}{props.address}{' '}
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
    fullName: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    phoneNumber:PropTypes.string.isRequired,
    address:PropTypes.string.isRequired,
    handleChangeAddress:PropTypes.func,
    handleChangeEmail:PropTypes.func,
    handleChangeFullName:PropTypes.func,
    handleChangePhoneNumber:PropTypes.func
}
export default PersonalDetails