import React, { useContext, useEffect } from 'react';
import GithubContext from '../context/githubContext';


const Commits = (props) => {
    const { user, commits, getCommits, formatDate } = useContext(GithubContext);

    useEffect(() => {
        getCommits(user.login, props.match.params.slug);
        document.documentElement.scrollTop = 0;
    }, [])

    return (
        <>
            <h5 className="mt-4">{props.match.params.slug} Commits</h5>
            <div className="list-group list-group-flush">
                {!!commits.length && commits.map((commit, index) => {
                    return (
                        <a href={commit.html_url} target="_blank" rel="noreferrer" className="list-group-item list-group-item-action flex-column align-items-start bg-light" key={index} >
                            <div className="d-flex w-100 justify-content-between">
                                <h6 className="mb-1">{commit.commit.message}</h6>
                                <small className="date">{formatDate(commit.commit.committer.date)}</small>
                            </div>
                            {commit.author ?
                                <p className="mb-1">
                                    <img className="rounded-circle committer-avatar mr-2" src={commit.author.avatar_url} alt={commit.commit.committer.name} />
                                    {commit.author.login}
                                </p>
                                :
                                <p>{commit.commit.committer.name}</p>
                                }
                        </a>
                    )
                })}
            </div>
        </>

    )
}

export default Commits;
