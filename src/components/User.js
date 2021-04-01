import React, { Component } from "react";
import { Link } from 'react-router-dom';

class User extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { login, avatar_url, html_url } = this.props.user;
    return (
      <div className="col-md-3 mt-4">
        <div className="card">
          <img className="card-img-top" src={avatar_url} alt={login} />
          <div className="card-body">
            <h5 className="card-title">{login}</h5>
            <Link to={`/userdetail/${login}`} className="btn btn-primary">
              Go to Profile
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default User;
