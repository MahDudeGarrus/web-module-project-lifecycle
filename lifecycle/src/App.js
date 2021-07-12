import React from 'react';
import axios from 'axios';
import './App.css';
import GitHubCard from './components/GitHubCard';

const fetchingGitUser = (user) => {
  return axios.get('https://api.github.com/users/MahDudeGarrus')
    .then(res => {
      console.log("git user fetch res: ", res.data)
    })
    .catch(err => {
      console.log("git user fetch error: ", err)
    })
}
console.log(fetchingGitUser())

class App extends React.Component {
  state = {
    login: '',
    name: '',
    location: '',
    followers: '',
    following: '',
    bio: '',
  }

  // componentDidMount(){
  //   fetchingGitUser(this.state.login)
  //     .then(res => {
  //       this.setState({
  //         login: res.data.login
  //       })
  //     })
  // }

  render() {
    return (
      <div className="App">
        <h1>HELLO? Is it me you're looking for?</h1>
        <GitHubCard />
      </div>
    )
  }
}

export default App;