import PropTypes from 'prop-types';
import EmailSvg from "../assets/email.svg";
import MobileSvg from "../assets/mobile.svg";
import LocationSvg from "../assets/location.svg";

function PersonalDetails(props){
    const fullName = props.person.fullName;
    const email = props.person.email;
    const phoneNumber = props.person.phoneNumber;
    const address = props.person.address;
    function isWhite(str) {
        // fiddle this value to set stricter rules for what is white.
        var whiteLimit = 200, 
            r,g,b;
        
        r = parseInt("0x"+str.substring(1,3));
        g = parseInt("0x"+str.substring(3,5));
        b = parseInt("0x"+str.substring(5,7));
        if(r < whiteLimit || b < whiteLimit || g < whiteLimit) {
            return false;
        } 
        return true;    
    }
    let mystyle = {
        backgroundColor: "#D3D3D3",
        color:props.backgroundColor
    };
    if(isWhite(props.backgroundColor)){
        mystyle.color="#000000"
        mystyle.backgroundColor= props.backgroundColor
    }else{
        mystyle.backgroundColor= props.backgroundColor
        mystyle.color="#D3D3D3"
    }
    return(<>
        <div className='personalDisplay' style={mystyle}>
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
    address:PropTypes.string,
    backgroundColor:PropTypes.string,
}
export default PersonalDetails