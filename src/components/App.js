import React from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import GithubState from '../context/githubState'
import Navbar from "./Navbar";
import User from "./User";
import UserDetail from './UserDetail';
import AboutUs from './AboutUs';

const App = () => {

  return (
    <GithubState>
      <BrowserRouter>
        <Navbar title="Github User Finder" icon="fab fa-github mr-2" />
        <div className="container">
          <Switch>
            <Route exact path="/" component={User} />
            <Route path="/aboutus" component={AboutUs} />
            <Route path="/userdetail/:login" component={UserDetail} />
          </Switch>
        </div>
      </BrowserRouter>
    </GithubState>
  )
}

export default App;
