import React, { Component } from 'react';
import AboutMe from './AboutMe';

class AboutMeList extends Component {
    render() {
        const dataReturn = this.props.data.map((obj, key)=>{
            return (
                <AboutMe 
                    key={key}
                    title={obj.title}
                    bodyTable={obj.body}
                />
            )
        })
        return (
            <section className="container about-me">
                {dataReturn}
            </section>
        );
    }
}

export default AboutMeList;