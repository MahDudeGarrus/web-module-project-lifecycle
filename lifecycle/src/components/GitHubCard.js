import React from 'react';

class GitHubCard extends React.Component {
    componentDidMount() {
        console.log('GitHubCard: Component Did Mount')
    }
    render() {
        return(
            <div>
                <h2>Some Dude's Git Hub Info</h2>
            </div>
        )
    }
}

export default GitHubCard