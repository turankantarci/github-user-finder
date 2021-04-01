import React from "react";

const UserRepos = (props) => {
  return (
    <div className="list-group list-group-flush">
        {props.repos.map((item) => {
           return (
            <a href={item.html_url} target="_blank" className="list-group-item list-group-item-action flex-column align-items-start bg-light" >
                <div className="d-flex w-100 justify-content-between">
                    <h5 className="mb-1">{item.name}</h5>
                    <small>{item.language}</small>
                </div>
                <p className="mb-1">{item.description}.</p>
                <small>{item.html_url}</small>
            </a>
            )
        })}
    </div>
  );
};

export default UserRepos;
