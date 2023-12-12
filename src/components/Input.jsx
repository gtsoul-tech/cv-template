import PropTypes from 'prop-types';
import './EditSide.css'
function Input( { label,value,handleChange,placeholder,recommended=false }){
    
    return(
        <>
        <label className="personalLabel">
        {recommended ? (
            <div>
                {label}
                {' '}
                <span className='recommended'>recommended</span>
            </div>
        ) : (
            
            <span>{label}
            {' '}</span>
        )}
        <input
            className='inputPersonal'
            value={value}
            onChange={handleChange}
            placeholder={placeholder}
        />
        </label>
        </>
    )
}
Input.propTypes = {
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    handleChange:PropTypes.func,
    placeholder: PropTypes.string.isRequired,
    recommended: PropTypes.bool
}
export default Input
