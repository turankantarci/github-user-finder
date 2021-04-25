const GithubReducer = (state, action) => {
    switch (action.type) {
        case "SEARCH_USERS":
            return {
                ...state,
                users: action.payload
            }
        case "GET_POPULAR_REPOS":
            return {
                ...state,
                popularRepos: action.payload
            }
        case "GET_USER_INFO":
            return {
                ...state,
                user: action.payload
            }
        case "GET_USER_REPO":
            return {
                ...state,
                repos: action.payload
            }
        case "GET_COMMITS":
            return {
                ...state,
                commits: action.payload
            }
        case "SHOW_LOADING":
            return {
                ...state,
                loading: true
            }
        case "HIDE_LOADING":
            return {
                ...state,
                loading: false
            }
        default:
            return state;
    }
}

export default GithubReducer;