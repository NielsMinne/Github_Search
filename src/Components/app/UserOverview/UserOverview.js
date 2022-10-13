import { useState } from "react";
import useGithubApi from "../../../hooks/useGithubApi";
import ErrorAlert from "../../Design/Alert/ErrorAlert";
import WarningAlert from "../../Design/Alert/WarningAlert";
import Card from "../../Design/Card/Card";
import ListItem from "../../Design/List/ListItem";
import LoadingIndicator from "../../Design/LoadingIndicator/LoadingIndicator";
import SearchField from "../../Design/SearchField/SearchField";

import './UserOverview.css';


const UserOverview = () => {
    
    const [username,setUsername] = useState('');
    const [currentUser,setCurrentUser] =useState();
    const [search,setSearch] = useState();
    const [active,setActive] = useState('disabled');
    
    
    const handleChange = (e) => {
        if(e.target.value.length >= 4){
            setActive('active');
        }
        else{
            setActive('disabled');
        }
        setUsername(e.target.value);
    };

    const handleClickSearch = () => {
        if(username.length >= 4){
            
            setActive('active');
        }
        setSearch(username) ;
        setCurrentUser(null);
    };

    const handleClickReset = () => {
        setUsername('')
        setSearch(null);
        setActive('disabled');
        setCurrentUser(null);
        document.title = "Github Search";
    };

    const handleUserClick = (user) =>{
        if(user){
          document.title = `Github | ${user.login}`;
        } else{
          document.title = "Github Search";
        }
        setCurrentUser(user);
    };
  
    const {isLoading,data,error} = useGithubApi(`https://api.github.com/search/users?q=${search}`);

    if(isLoading){
        return <LoadingIndicator/>;
    }

    if(error){
        return(
            <>
            <SearchField onChange={handleChange} onClickSearch={handleClickSearch} onClickReset={handleClickReset} isActive={active}/>
            <ErrorAlert/>
            </>
            )
    }

    if(data.items.length === 0){
        return(
        <>
        <SearchField onChange={handleChange} onClickSearch={handleClickSearch} onClickReset={handleClickReset} isActive={active}/>
        <WarningAlert/>
        </>
        )
    }

    return(
        <>
        <SearchField onChange={handleChange} onClickSearch={handleClickSearch} onClickReset={handleClickReset} isActive={active}/>

        {search && (<h2>{data.items.length} Resultaten</h2>)}
        <div className="content-flex">
            <div>
        {data.items.map((user) => (
            search && (<ListItem
            key ={user.id}
            name={user.login}
            img={user.avatar_url}
            onClick={() => handleUserClick(user)}
            />
            )
        ))}
        </div>
         {currentUser && (
             <Card user={currentUser} onClose={() => handleUserClick(null)}/>
            )
        }
        </div>
        </>
    )
    
    
};

export default UserOverview;