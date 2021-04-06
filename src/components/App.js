import React, { useContext } from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import GithubContext from "../context/githubContext";
import Navbar from "./Navbar";
import User from "./User";
import UserDetail from './UserDetail';
import AboutUs from './AboutUs';
import Loading from './Loading'
import PopularRepos from "./PopularRepos";

const App = () => {

  const { users, loading } = useContext(GithubContext);

  return (
    <BrowserRouter>
      <Navbar title="Github User Finder" icon="fab fa-github mr-2" />
      <div className="container">
        <Switch>
          <Route exact path="/" render={props => (
            <>
              <User />
              {!users.length && <PopularRepos />}
            </>
          )} />
          <Route path="/aboutus" component={AboutUs} />
          <Route path="/userdetail/:login" component={UserDetail} />
          <Route path="/popularrepos" component={PopularRepos} />
        </Switch>
        {loading && <Loading />}
      </div>
    </BrowserRouter>
  )
}

export default App;
