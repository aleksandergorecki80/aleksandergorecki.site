import React, { Component } from 'react';

import Header from './components/header/Header';
import Home from './components/jumbotron/Jumbotron';

import aboutMeContent from './components/AboutMe/about_me-content';
import AboutMeList from './components/AboutMe/AboutMeList';

import PortfolioContent from './components/portfolio/portfolio-content';
import PortfolioList from './components/portfolio/PortfolioList';

import ContactMe from './components/contact/ContactMe';

import 'normalize.css/normalize.css';
import './styles/styles.scss';

class App extends Component {
    
    render() {
        const newData = aboutMeContent;
      
        return (
            <div>
                <Header />
                <Home />
                <AboutMeList 
                    data={newData}
                />
                <PortfolioList 
                    portfolioContent={PortfolioContent.data} />
                <ContactMe />

            </div>
        );
    }
}

export default App;