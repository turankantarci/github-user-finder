import React, { useEffect, useContext } from "react";
import { Route, Switch } from 'react-router-dom'
import UserInfo from "./UserInfo";
import UserRepos from './UserRepos'
import Commits from './Commits'
import GithubContext from "../context/githubContext";

const UserDetail = (props) => {

  const { getUserInfo, getUserRepo } = useContext(GithubContext);

  useEffect(() => {
    getUserInfo(props.match.params.login);
    getUserRepo(props.match.params.login);
    document.documentElement.scrollTop = 0;
  }, []);

  return (
    <div>
      <UserInfo />
      <Switch>
        <Route exact path={`/userdetail/${props.match.params.login}`} component={UserRepos}/>
        <Route exact path={`/userdetail/${props.match.params.login}/:slug/commits`} component={Commits} />
      </Switch>
    </div>
  )
}

export default UserDetail;
