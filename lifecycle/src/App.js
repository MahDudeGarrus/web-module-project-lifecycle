import React from 'react';
import axios from 'axios';
import './App.css';
import GitHubCard from './components/GitHubCard';
import UserFollowers from './components/UserFollowers';

class App extends React.Component { 
constructor() {
  super();
  this.state = {
    gitUser: {},
    followers: [],
  }
}

  componentDidMount(){
    axios.get('https://api.github.com/users/MahDudeGarrus')
    .then(res => {
      console.log("git user fetch res: ", res.data)
      this.setState({gitUser: res.data})
    })
    .catch(err => {
      console.log("git user fetch error: ", err)
    })

    axios.get('https://api.github.com/users/MahDudeGarrus/followers')
    .then(res => {
      console.log('git followers fetch res: ', res.data)
      this.setState({followers: res.data})
    }, [])
    .catch(err => {
      console.log('git followers fetch error: ', err)
    })
  }

  render() {
    const gitUser = ['']
    return (
      <div className="App">
        <h1>HELLO? Is it me you're looking for?</h1>
        <GitHubCard gitUser={this.state.gitUser} />
        {this.state.followers.map(follower => {
          return (
            <UserFollowers follower={follower} key={follower.id} />
          )
        })}
      </div>
    )
  }
}

export default App;