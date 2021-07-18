import React from 'react';

export default function GitHubCard (props) {
    return(
        <div className='cardContainer'>
            <div className='cardHeader'>
                <img src={props.gitUser.avatar_url} />
                <h2>{props.gitUser.login}</h2>  
            </div>
        
            <div className='cardInfo'>
                <h3>Name: {props.gitUser.name}</h3> 
                <p>Location: {props.gitUser.location}</p>
                <p>Followers: {props.gitUser.followers}</p>
                <p>Following: {props.gitUser.following}</p>
                <p>Bio: {props.gitUser.bio}</p> 
            </div>    
        </div>

    )
}