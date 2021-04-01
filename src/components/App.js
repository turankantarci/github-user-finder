import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from "./Navbar";
import Users from "./Users";
import UserDetail from './UserDetail';
import AboutUs from './AboutUs';
import axios from "axios";

class App extends Component {
  constructor(props) {
    super(props);
    this.searchUsers = this.searchUsers.bind(this);

    this.state = {
      users: [],
      user: null
    };
  }

  searchUsers(keyword) {
    axios.get(`https://api.github.com/search/users?q=${keyword}`).then((response) => {
      this.setState({
        users: response.data.items
      });
    });
  }

  render() {
    return (
      <BrowserRouter>
        <Navbar title="Github User Finder" icon="fab fa-github mr-2" searchUsers={this.searchUsers} />
        <div className="container">
        <Switch>
          <Route exact path="/" render={
            props => {
                return this.state.users.length ? <Users users={this.state.users} /> : <h5 className="text-center mt-5">Search any user...</h5> 
              }
          } />
          <Route path="/aboutus" component={AboutUs} />
          <Route path="/userdetail/:login" component={UserDetail}/>
        </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
