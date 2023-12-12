import PropTypes from 'prop-types';
function Input( { label,value,handleChange,placeholder }){
    return(
        <>
        <label>
        {label}
        {' '}
        <input
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
    placeholder: PropTypes.string.isRequired
}
export default Input
