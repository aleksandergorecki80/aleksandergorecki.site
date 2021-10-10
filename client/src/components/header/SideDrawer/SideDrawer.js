import React from 'react';
import { Link } from "react-scroll";

import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SideDrawer = props => {
    let drawerClasses = 'side-drawer';
    props.show && (drawerClasses = 'side-drawer open');
    return (
        <nav className={ drawerClasses } >
            <div className="close-icon-wrap">
                <FontAwesomeIcon icon={faTimesCircle} className="side-drawer-close-icon" onClick={props.close} />
            </div>
            <ul>
            <Link 
                                to="jumbotron"
                                activeClass="is-avtive"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                                className="header__nav-link" 
                                onClick={props.close}
                            >Home</Link>
                            <Link 
                                to="about-me" 
                                activeClass="is-avtive"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                                className="header__nav-link"
                                onClick={props.close}
                            >About me</Link>
                            <Link 
                                to="portfolio" 
                                activeClass="is-avtive"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                                className="header__nav-link"
                                onClick={props.close}
                            >Portfolio</Link>
                            <Link 
                                to="contact" 
                                activeClass="is-avtive"
                                spy={true}
                                smooth={true}
                                // offset={-600}
                                duration={500}
                                className="header__nav-link"
                                onClick={props.close}
                            >Contact</Link>
            </ul>
        </nav>
    )

};

export default SideDrawer;

