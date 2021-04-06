import React, { useContext } from "react";
import GithubContext from "../context/githubContext";

const UserRepos = () => {

  const { repos } = useContext(GithubContext);
  
  return (
    <div className="list-group list-group-flush">
      {repos.map((repo, index) => {
        return (
          <a href={repo.html_url} target="_blank" rel="noreferrer" className="list-group-item list-group-item-action flex-column align-items-start bg-light" key={index} >
            <div className="d-flex w-100 justify-content-between">
              <h5 className="mb-1">{repo.name}</h5>
              <small>{repo.language}</small>
            </div>
            <p className="mb-1">{repo.description}.</p>
            <small>{repo.html_url}</small>
          </a>
        )
      })}
    </div>
  );
};

export default UserRepos;
