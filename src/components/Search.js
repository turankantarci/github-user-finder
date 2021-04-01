import React, { Component } from 'react';
import {Link} from 'react-router-dom'

class Search extends Component {
    constructor(props) {
        super(props);
        this.searchInputChange = this.searchInputChange.bind(this);
        this.searchUsers = this.searchUsers.bind(this);

        this.state = {
            keyword: ""
        }
    }

    searchInputChange(e) {
        this.setState({
            keyword: e.target.value
        })
    }

    searchUsers(){
        if(this.state.keyword) {
            this.props.searchUsers(this.state.keyword);
            this.setState({
                keyword: ""
            });
        }
    }

    render() {
        return (
            <form className="form-inline" onSubmit={(e) => e.preventDefault()}>
                <input className="form-control mr-2" type="text" value={this.state.keyword} placeholder="Search" autoFocus onChange={this.searchInputChange} />
                <Link to="/" className="btn btn-outline-light" onClick={this.searchUsers}>Search</Link>
            </form>
        )
    }
}

export default Search;
