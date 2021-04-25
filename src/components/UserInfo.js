import React, { useContext } from "react";
import { Link } from "react-router-dom";
import GithubContext from "../context/githubContext";

const UserInfo = () => {

    const { user } = useContext(GithubContext);
    const { login, avatar_url, name, bio, public_repos, followers, following } = user;

    return (
        <div className="jumbotron">
            <div className="d-flex align-items-center">
                <Link to={`/userdetail/${login}`}>
                    <img className="rounded-circle user-avatar" src={avatar_url} alt={name} />
                </Link>
                <div className="ml-3">
                    <h1 className="display-4">{name}</h1>
                    {bio && <p className="lead">{bio}</p>}
                    <span className="badge badge-primary mr-1">Repos: {public_repos}</span>
                    <span className="badge badge-danger mr-1">Followers: {followers}</span>
                    <span className="badge badge-success">Following: {following}</span>
                </div>
            </div>
        </div>
    )
}

export default UserInfo;