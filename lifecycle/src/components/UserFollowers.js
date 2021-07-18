import React from 'react';

export default function UserFollowers(props) {
    return (
        <div className='followerContainer'>
            <div className='followerImage'>
                <img src={props.follower.avatar_url} />
            </div>
            <div className='followerInfo'>
                <h2>{props.follower.login}</h2>
                <h3>{props.follower.url}</h3>
            </div>
        </div>
    )
}