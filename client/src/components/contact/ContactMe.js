import React, { Component } from 'react';
import PhotoOfMe from '../../images/photo-of-me.jpg';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithubSquare, faLinkedin, faSkype } from "@fortawesome/free-brands-svg-icons";

import ContactForm from './ContactForm';
 

class ContactMe extends Component {
    render(){
        return (
            <section className="container">
                <div className="row">
                    <div className="col-4 col-s-12 contact-me__data">
                        <h4>CONTACT ME</h4>
                        <div className="contact-me_photo_container">
                            <img src={ PhotoOfMe } className="photo-of-me" alt="Aleksander Górecki"/>
                        </div>
                        <div className="contact-me__icons-container">
                            <a href="mailto:aleksandergorecki80@gmail.com">
                                <FontAwesomeIcon icon={faEnvelope} className="contact-me__icon"/>
                            </a>
                            <a href="https://github.com/aleksandergorecki80" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faGithubSquare} className="contact-me__icon"/>
                            </a>
                            <a href="https://www.linkedin.com/in/aleksander-gorecki-923417a7/" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faLinkedin} className="contact-me__icon"/>
                            </a>
                            <a href="skype:alek_ander?chat">
                                <FontAwesomeIcon icon={faSkype} className="contact-me__icon"/>
                            </a>
                        </div>
                    </div>
                    <div className="col-8 col-s-12 contact-data">
                        <ContactForm />
                    </div>
                </div>
            </section>
        );
    }
}


export default ContactMe;

