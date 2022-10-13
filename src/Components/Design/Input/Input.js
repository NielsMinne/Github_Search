import './Input.css'

const Input = ({value ,onChange}) => {
    return(
    <input 
    value={value} 
    placeholder="Please enter a github username"
    type="text" 
    onChange={onChange} 
    className='searchInput'></input>
    )
};

export default Input;