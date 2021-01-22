import React from 'react';
import UserList from './user-list';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      isLoading: true
    };
  }

  componentDidMount() {
    const fetch_url = fetch('https://jsonplaceholder.typicode.com/users',{
      Method:'GET',
      headers:{
        'Content-type': 'application/json'
      }
    })

    .then(res=>{
      return res.json()
    })
    .then(result=>{
      this.setState({users:result, isLoading:false})
    })

    .catch(err=>{
     return err;
    })
    /* your code here */
  }

  render() {
    return this.state.isLoading
      ? <p>Loading...</p>
      : <UserList users={this.state.users} />;
  }
}

export default App;
