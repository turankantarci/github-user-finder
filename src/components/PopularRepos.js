import React, { useContext, useEffect } from 'react';
import GithubContext from '../context/githubContext';

const PopularRepos = () => {

    const { popularRepos, getPopularRepos } = useContext(GithubContext);

    useEffect(() => {
        getPopularRepos();
    }, [])

    return (
        <>
            <h3 className="my-4">Popular Repos</h3>
            <div className="list-group list-group-flush">
                {popularRepos.map((repo, index) => {
                    return (
                        <a href={repo.html_url} target="_blank" rel="noreferrer" className="list-group-item list-group-item-action flex-column align-items-start bg-light" key={index} >
                            <div className="d-flex w-100 justify-content-between">
                                <h5 className="mb-1">{repo.name}</h5>
                                <small>{repo.language}</small>
                            </div>
                            <p className="mb-1">{repo.description}.</p>
                            <p className="mb-1"><span className="badge badge-secondary">Stars: {repo.stargazers_count}</span></p>
                            <div className="d-flex justify-content-between">
                                <small>{repo.html_url}</small>
                                <small>{repo.owner.login}</small>
                            </div>
                        </a>
                    )
                })}
            </div>
        </>
    )
}

export default PopularRepos;
