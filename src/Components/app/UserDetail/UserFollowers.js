import useGithubApi from '../../../hooks/useGithubApi';
import List from '../../Design/List/List';
import ListItem from '../../Design/List/ListItem';
import LoadingIndicator from '../../Design/LoadingIndicator/LoadingIndicator';
import './UserFollowers.css';


const UserFollowers = ({username}) => {
   
    const {isLoading,data,error} = useGithubApi(`https://api.github.com/users/${username}/followers`);

    if(isLoading){
        return <LoadingIndicator/>;
    }

    if(error){
        console.log(error);
        return <p>Er ging iets mis</p>;
    }
    
    console.log(data);
    return(
        <>
           <h2 className='follower-amount'>{data.length} Followers</h2>
          <List>
          {data.map((follower) => (
            <ListItem
            className='follower__card'
            key ={follower.id}
            name={follower.login}
            img={follower.avatar_url}
            />
            )
        )}    
          </List>
        </>
    );
};

export default UserFollowers