import PropTypes from 'prop-types';
import '../styles/DisplaySide.css';

function ExperienceDetails(props){
    return(
        <div className='sectionDisplay'>
        {props.experiences.length > 1 ? (
            <div>
            <h2 className='educationDisplayTitle'> Experience </h2>
            {props.experiences.map((current)=>{
                return (
                    <div key={current.id} className='educationInfo'>
                        <div className='infoDate'>
                            {current.experience.startDate}
                            {current.experience.startDate && current.experience.endDate ? " - " : " "}
                            {current.experience.endDate}
                        </div>
                        <div className='infoTitle'> {current.experience.company}</div>
                        <div className='infoLocation'>{current.experience.location}</div>
                        <div></div>
                        <div className='infoDescription'>{current.experience.position}</div>
                        <div className='infoDescription'>{current.experience.description}</div>
                    </div>
                );
            })}
                
            </div>
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
    description:PropTypes.string
}
export default ExperienceDetails
