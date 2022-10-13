import "./Button.css";

const Button = ({className,color ="primary",onClick, name="Button" }) =>{
    return(
        <button className={`btn btn--${color} ${className}`} onClick={onClick}>
            {name}
        </button>
    )
}

export default Button;