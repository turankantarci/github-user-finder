import React, { useState, useContext } from 'react';
import GithubContext from '../context/githubContext'
import { useHistory } from 'react-router-dom'

const Search = (props) => {
    const [ keyword, setKeyword ] = useState('');
    const history = useHistory();
    const { searchUsers } = useContext(GithubContext);

    const searchInputChange = (e) => {
        setKeyword(e.target.value);
    }

    const searchUser = () => {
        if (keyword) {
            searchUsers(keyword);
            setKeyword('');
            history.push("/");
        }
    }

    return (
        <React.Fragment>
            {props.isMainSearch ? (
                <div className="col-12 input-group input-group-lg mt-5">
                    <input type="text" className="form-control" placeholder="Search any user..." onChange={searchInputChange} onKeyPress={e => e.key === "Enter" && searchUser()} />
                    <div className="input-group-append">
                        <button className="btn btn-primary" type="button" onClick={searchUser}>Search</button>
                    </div>
                </div>
            ) : (
                <form className="form-inline" onSubmit={(e) => e.preventDefault()}>
                    <input className="form-control mr-2" type="text" value={keyword} placeholder="Username" onChange={searchInputChange} onKeyPress={e => e.key === "Enter" && searchUser()} />
                    <button type="button" className="btn btn-outline-light" onClick={searchUser}>Search</button>
                </form>
            )}
        </React.Fragment>
    )
}

export default Search;
