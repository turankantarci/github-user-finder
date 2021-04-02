import React, { useEffect, useContext } from "react";
import UserRepos from './UserRepos'
import GithubContext from "../context/githubContext";

const UserDetail = (props) => {

  const { user, getUserInfo, getUserRepo } = useContext(GithubContext);

  useEffect(() => {
    getUserInfo(props.match.params.login);
    getUserRepo(props.match.params.login);
    console.log('useEffect worked.');
  }, []);

  const { avatar_url, name, bio, public_repos, followers, following } = user;

  return (
    <div>
      <div className="jumbotron">
        <div className="d-flex align-items-center">
          <img
            className="rounded-circle user-avatar"
            src={avatar_url}
            alt={name}
          />
          <div className="ml-3">
            <h1 className="display-4">{name}</h1>
            {bio && <p className="lead">{bio}</p>}
            <span className="badge badge-primary mr-1">Repos: {public_repos}</span>
            <span className="badge badge-danger mr-1">Followers: {followers}</span>
            <span className="badge badge-success">Following: {following}</span>
          </div>
        </div>
      </div>
      <UserRepos />
    </div>
  )
}

export default UserDetail;
