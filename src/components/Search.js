import React, { useState, useContext } from 'react';
import GithubContext from '../context/githubContext'
import { Link } from 'react-router-dom'

const Search = (props) => {

    const [keyword, setKeyword] = useState('');
    const { searchUsers } = useContext(GithubContext);

    const searchInputChange = (e) => {
        setKeyword(e.target.value);
    }

    const searchUser = () => {
        if (keyword) {
            searchUsers(keyword);
            setKeyword('');
        }
    }

    return (
        <form className="form-inline" onSubmit={(e) => e.preventDefault()}>
            <input className="form-control mr-2" type="text" value={keyword} placeholder="Search" autoFocus onChange={searchInputChange} />
            <Link to="/" className="btn btn-outline-light" onClick={searchUser}>Search</Link>
        </form>
    )
}

export default Search;
