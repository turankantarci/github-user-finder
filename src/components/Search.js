import React, { useContext, useRef } from 'react';
import GithubContext from '../context/githubContext'
import { useHistory } from 'react-router-dom'

const Search = (props) => {
    const history = useHistory();
    const { searchUsers } = useContext(GithubContext);
    const searchInput = useRef();

    const searchUser = () => {
        searchUsers(searchInput.current.value);
        history.push("/");
    }

    return (
        <>
            {props.isMainSearch ? (
                <div className="col-12 input-group input-group-lg mt-5">
                    <input type="text" ref={searchInput} className="form-control" placeholder="Search any user..." onKeyPress={e => e.key === "Enter" && searchUser()} />
                    <div className="input-group-append">
                        <button className="btn btn-primary" type="button" onClick={searchUser}>Search</button>
                    </div>
                </div>
            ) : (
                <form className="form-inline" onSubmit={(e) => e.preventDefault()}>
                    <input type="text" ref={searchInput} className="form-control mr-2" placeholder="Username" onKeyPress={e => e.key === "Enter" && searchUser()} />
                    <button type="button" className="btn btn-outline-light" onClick={searchUser}>Search</button>
                </form>
            )}
        </>
    )
}

export default Search;
