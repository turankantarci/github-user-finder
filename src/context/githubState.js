import React, { useReducer } from "react";
import GithubReducer from './githubReducer';
import GithubContext from './githubContext';
import axios from "axios";

const GithubState = (props) => {
    const initialState = {
        users: [],
        user: {},
        repos: [],
        popularRepos: [],
        loading: false
    }

    const [state, dispatch] = useReducer(GithubReducer, initialState);

    const showLoading = () => {
        dispatch({
            type: 'SHOW_LOADING'
        });
    }

    const hideLoading = () => {
        dispatch({
            type: 'HIDE_LOADING'
        });
    }

    const searchUsers = (keyword) => {
        showLoading();
        axios.get(`https://api.github.com/search/users?q=${keyword}`).then((response) => {
            dispatch({
                type: "SEARCH_USERS",
                payload: response.data.items
            });
            hideLoading();
        });
    }

    const getUserInfo = (username) => {
        showLoading();
        axios.get(`https://api.github.com/users/${username}`).then((response) => {
            dispatch({
                type: "GET_USER_INFO",
                payload: response.data
            });
            hideLoading();
        });
    }

    const getUserRepo = (username) => {
        showLoading();
        axios.get(`https://api.github.com/users/${username}/repos`).then((response) => {
            dispatch({
                type: "GET_USER_REPO",
                payload: response.data
            });
            hideLoading();
        });
    }

    const getPopularRepos = () => {
        showLoading();
        axios.get('https://api.github.com/search/repositories?q=stars:%3E1&sort=stars').then((response) => {
            dispatch({
                type: "GET_POPULAR_REPOS",
                payload: response.data.items
            });
            hideLoading();
        });
    }

    return <GithubContext.Provider
        value={{
            users: state.users,
            user: state.user,
            repos: state.repos,
            popularRepos: state.popularRepos,
            loading: state.loading,
            searchUsers,
            getUserInfo,
            getUserRepo,
            getPopularRepos
        }}>
        {props.children}
    </GithubContext.Provider>
}

export default GithubState;