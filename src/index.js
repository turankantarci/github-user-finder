import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App'
import GithubState from './context/githubState'
import './styles/main.scss';

ReactDOM.render(
    <GithubState>
        <App />
    </GithubState>,
    document.getElementById('root')
);