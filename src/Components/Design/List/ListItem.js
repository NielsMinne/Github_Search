import './List.css'

const ListItem = ({ name, img, onClick }) => {
    return (
      <li className="list__item" onClick={onClick}>
        <img className='list__image' src={img} alt={name} />
        <p>{name}</p>
      </li>
    );
  };
export default ListItem;