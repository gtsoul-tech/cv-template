import PropTypes from 'prop-types';
function EducationDetails(props){
    const school=props.degree.school;
    const degreeTitle=props.degree.degreeTitle;
    const startDate=props.degree.startDate;
    const endDate=props.degree.endDate;
    const location=props.degree.location;
    
    const degrees="";
    return(<>
        <div className='educationDisplay'>
            
        </div>
    </>)
}
EducationDetails.propTypes = {
    degree: PropTypes.object.isRequired,
    school: PropTypes.string,
    degreeTitle: PropTypes.string,
    startDate: PropTypes.string,
    endDate:PropTypes.string,
    location:PropTypes.string,
    handleChangeSchool:PropTypes.func,
    handleChangeDegree:PropTypes.func,
    handleChangeStartDate:PropTypes.func,
    handleChangeEndDate:PropTypes.func,
    handleChangeLocation:PropTypes.func,
}
export default EducationalDetails

/*degrees.map( () => {
            console.log("Entered");                 
            // Return the element. Also pass key     
            return (<Answer key={answer} answer={answer} />) 
            }) */