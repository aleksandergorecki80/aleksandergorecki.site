import React from 'react';
import PortfolioPage from './PortfolioPage';

const PortfolioList = (props) => {
    const projectsList = props.portfolioContent.map((project, key)=>{
        return(
            <PortfolioPage 
            key={key}
            project={project}
        />
        )

    });

    return (
        <section className="container portfolio">
            <h2>MY PROJECTS</h2>
            {projectsList}
        </section>
    )
}

export default PortfolioList;