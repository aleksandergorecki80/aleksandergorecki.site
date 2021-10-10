import React, { Component } from 'react';
class AboutMe extends Component {

    render() {
        const bodyTable = this.props.bodyTable.map((body, key) => {
            return (
                <p key={key}>{body}</p>
            )
        });
        return (
            <div className="about-me__content">
                <h5>{this.props.title}</h5>
                <hr />
                {bodyTable}
            </div>
        )
    }

}

export default AboutMe;