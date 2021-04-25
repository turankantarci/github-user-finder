import React, { useContext } from "react";
import { Link } from 'react-router-dom'
import GithubContext from "../context/githubContext";

const UserRepos = (props) => {

  const { repos } = useContext(GithubContext);
  return (
    <div className="list-group list-group-flush">
      {repos.map((repo, index) => {
        return (
          <Link to={`${props.match.path}/${repo.name}/commits`} className="list-group-item list-group-item-action flex-column align-items-start bg-light" key={index} >
            <div className="d-flex w-100 justify-content-between">
              <h5 className="mb-1">{repo.name}</h5>
              <small>{repo.language}</small>
            </div>
            <div className="d-flex w-100 justify-content-between align-items-end">
              <div>
                <p className="mb-1">{repo.description}.</p>
                <small>{repo.html_url}</small>
              </div>
              <i className="fas fa-angle-right"></i>
            </div>
          </Link>
        )
      })}
    </div>
  );
};

export default UserRepos;
