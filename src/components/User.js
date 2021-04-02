import React, { useContext } from "react";
import { Link } from 'react-router-dom';
import GithubContext from '../context/githubContext'

const User = () => {
  const { users } = useContext(GithubContext);
  return (
    <div className="row">
      {
        users.length ?
          users.map((user, index) => {
            return (
              <div className="col-md-3 mt-4" key={index}>
                <div className="card">
                  <img className="card-img-top" src={user.avatar_url} alt={user.login} />
                  <div className="card-body">
                    <h5 className="card-title">{user.login}</h5>
                    <Link to={`/userdetail/${user.login}`} className="btn btn-primary">
                      Go to Profile
                    </Link>
                  </div>
                </div>
              </div>
            )
          })
          : <div className="col-12 text-center mt-3">Search any user...</div>
      }
    </div>
  );
}

export default User;
