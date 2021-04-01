import React, { Component } from "react";
import User from "./User";

class Users extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="row">
        {this.props.users.map((user) => {
          return <User user={user} key={user.id} />;
        })}
      </div>
    );
  }
}

export default Users;
