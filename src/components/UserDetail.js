import React, { Component } from "react";
import axios from "axios";
import UserRepos from './UserRepos'

class UserDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {},
      repos: []
    };
  }

  componentDidMount() {
    this.getUserInfo(this.props.match.params.login);
    this.getUserRepos(this.props.match.params.login);
  }

  getUserInfo(username) {
    axios.get(`https://api.github.com/users/${username}`).then((response) => {
      this.setState({
        user: response.data,
      });
    });
  }

  getUserRepos(username) {
    axios.get(`https://api.github.com/users/${username}/repos`).then((response) => {
      this.setState({
        repos: response.data,
      });
    });
  }

  render() {
    const {
      avatar_url,
      bio,
      name,
      public_repos,
      followers,
      following
    } = this.state.user;
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
        <UserRepos repos={this.state.repos} />
      </div>
    );
  }
}

export default UserDetail;
