import Button from "../Button/Button";
import Input from "../Input/Input";

const SearchField = ({username,onChange,onClickSearch,onClickReset,isActive}) => {
    return(
        <div className='inputContainer'>
        <Input value={username} onChange={onChange}/>
        <Button className={`search-btn btn-${isActive}`} onClick={onClickSearch} color='primary' name="Search"/>
        <Button className="reset-btn" onClick={onClickReset} color='secondary' name="Reset"/>
        </div>
    )
};

export default SearchField;