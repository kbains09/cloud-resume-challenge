import React, { useEffect, useState } from 'react';
import './Projects.scss';

function Projects() {
    const [repos, setRepos] = useState([]);
    const displayRepos = ['Certifications', 'cli-expense-tracker', 'demo-queue-service'];


    const repoImages = {
        'Certifications': '/images/certifications.jpg', 
        'cli-expense-tracker': '/images/cli-expense-tracker.jpg',
        'demo-queue-service': '/images/demo-queue-service.jpg'
    };

    useEffect(() => {
        fetch('https://api.github.com/users/kbains09/repos')
            .then(response => response.json())
            .then(data => {
                const filteredRepos = data.filter(repo => displayRepos.includes(repo.name)).map(repo => ({
                    ...repo,
                    imageUrl: repoImages[repo.name] 
                }));
                setRepos(filteredRepos);
            })
            .catch(error => console.error('Error fetching data: ', error));
    }, []);

    return (
        <div id="projects">
            <h1>My Projects</h1>
            <ul>
                {repos.map(repo => (
                    <li key={repo.id}>
                        <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                            <img src={repo.imageUrl} alt={`Preview of ${repo.name}`} style={{ width: 100, height: 100 }} /> {/* Inline styles for demonstration */}
                            {repo.name}
                        </a>
                        <p>{repo.description || 'No description available'}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Projects;