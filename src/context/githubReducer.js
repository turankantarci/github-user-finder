const GithubReducer = (state, action) => {
    switch (action.type) {
        case "SEARCH_USERS":
            return {
                ...state,
                users: action.payload
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
        default:
            return state;
    }
}

export default GithubReducer;