import React from 'react';
import HeroBg from '../../images/hero_bg.jpg';

import { Link, animateScroll as scroll } from "react-scroll";

import { faAngleDoubleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Jumbotron = () => (
    <section className="jumbotron">
        <div
            className="jumbotron__backgound"
            style={{
                backgroundImage: `url(${HeroBg})`,
                backgroundSize: "cover",
                height: "80vh",
            }}
        >
                <Link
                    to="about-me"
                    activeClass="is-avtive"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500} 
                    className="jumbotron__go-down-button"
                    >
                    <FontAwesomeIcon icon={faAngleDoubleDown} className="jumbotron__go-down-button__icon" />
                </Link>
        </div>
    </section>
);

export default Jumbotron;