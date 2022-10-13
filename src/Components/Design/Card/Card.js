import UserFollowers from '../../app/UserDetail/UserFollowers';
import Button from '../Button/Button';
import './Card.css';

const Card = ({user, onClose}) => {

    return(
        <>
        <div className='userDetail'>
              <Button className='btn--close' onClick={onClose} name="X"/>
              <div className='user__info'>
              <img className="user__image" src ={user.avatar_url} alt={user.login}/>
              <h1>{user.login}</h1>
              </div>
              <UserFollowers username={user.login}/>
            </div>
        </>
    )
};

export default Card;