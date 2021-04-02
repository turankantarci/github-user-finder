import React, { useReducer } from "react";
import GithubReducer from './githubReducer';
import GithubContext from './githubContext';
import axios from "axios";

const GithubState = (props) => {
    const initialState = {
        users: [],
        user: {},
        repos: []
    }

    const [state, dispatch] = useReducer(GithubReducer, initialState);

    const searchUsers = (keyword) => {
        axios.get(`https://api.github.com/search/users?q=${keyword}`).then((response) => {
            dispatch({
                type: "SEARCH_USERS",
                payload: response.data.items
            });
        });
    }

    const getUserInfo = (username) => {
        axios.get(`https://api.github.com/users/${username}`).then((response) => {
            dispatch({
                type: "GET_USER_INFO",
                payload: response.data
            });
        });
    }

    const getUserRepo = (username) => {
        axios.get(`https://api.github.com/users/${username}/repos`).then((response) => {
            dispatch({
                type: "GET_USER_REPO",
                payload: response.data
            });
        });
    }

    return <GithubContext.Provider
        value={{
            users: state.users,
            user: state.user,
            repos: state.repos,
            searchUsers,
            getUserInfo,
            getUserRepo
        }}>
        {props.children}
    </GithubContext.Provider>
}

export default GithubState;