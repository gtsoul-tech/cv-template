import PropTypes from 'prop-types';
import '../styles/DisplaySide.css';

function ExperienceDetails(props){
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
        mystyle.color=props.backgroundColor
        mystyle.backgroundColor= "#000000"
    }else{
        mystyle.backgroundColor= "#D3D3D3"
        mystyle.color=props.backgroundColor
    }
    return(
        <div className='sectionDisplay'>
        {props.experiences.length > 1 ? (
            <>
            <h2 className='educationDisplayTitle' style={mystyle}> Experience </h2>
            {props.experiences.map((current)=>{
                return (
                    <div key={current.id} className='experienceInfo'>
                        <div className='infoDateLocation'>
                            <div className='infoDate'>
                                {current.experience.startDate}
                                {current.experience.startDate && current.experience.endDate ? " - " : " "}
                                {current.experience.endDate}
                            </div>
                        <div className='infoLocation'>{current.experience.location}</div>
                        </div>
                        <div className='infoTitlePosition'>
                            <div className='infoTitle'> {current.experience.company}</div>
                            <div className='infoDescription'>{current.experience.position}</div>
                        </div>
                        <div></div>
                        <div className='infoDescription'>{current.experience.description}</div>
                    </div>
                );
            })}
            </>
                ) : (
                    <div>{' '}
                    </div>
                )}
            
        </div>
        )
}
ExperienceDetails.propTypes = {
    experiences:PropTypes.array,
    company: PropTypes.string,
    position:PropTypes.string,
    startDate: PropTypes.string,
    endDate:PropTypes.string,
    location:PropTypes.string,
    description:PropTypes.string,
    backgroundColor:PropTypes.string,
}
export default ExperienceDetails
