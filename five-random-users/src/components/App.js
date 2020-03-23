import React from 'react';
import './App.css';
import ButtonFetchUsers from './ButtonFetchUsers'
import UsersList from './UsersList';

const API = 'https://randomuser.me/api/?results=5'

class App extends React.Component {
  state = {
    users: []
  }


  handleDataFetch = () => {
    fetch(API)
      .then(response => {
        if (response.ok) {

          return response;
        }
        throw Error(response.status)
      }).then(response => response.json()).then(data => {
        this.setState({
          users: data.results
        });
      }).catch(error => console.log(error + " coś nie tak"));

  }
  render() {
    const users = this.state.users
    return (

      <div>
        <ButtonFetchUsers click={this.handleDataFetch} />
        {users ? <UsersList users={users} /> : users}
      </div>
    )
  }
}

export default App;
