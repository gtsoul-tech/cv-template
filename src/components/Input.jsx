import PropTypes from 'prop-types';
import '../styles/EditSide.css'
function Input( { label,value,name,handleChange,placeholder,recommended=false, optional=false}){
    
    return(
        <>
        <label className="personalLabel">
        {recommended? (
            <div>
                {label}
                {' '}
                <span className='recommended'>recommended</span>
            </div>
        ) : (optional) ?(
            <div>
                {label}
                {' '}
                <span className='recommended'>optional</span>
            </div>
        ) :(
            <div>{label}
            {' '}</div>
        )}
        <input
            className='inputPersonal'
            value={value}
            onChange={handleChange}
            placeholder={placeholder}
            name={name}
        />
        </label>
        </>
    )
}
Input.propTypes = {
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    name: PropTypes.string,
    handleChange:PropTypes.func,
    placeholder: PropTypes.string.isRequired,
    recommended: PropTypes.bool,
    optional: PropTypes.bool
}
export default Input
