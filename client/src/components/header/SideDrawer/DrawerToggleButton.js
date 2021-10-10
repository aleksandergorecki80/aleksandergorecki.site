import React from 'react';

const DrawerToggleButton = props => (
    <div>
        <button className="toggle_button" onClick={props.drawerClickHandler}>
            <div className="toggle_button--line"></div>
            <div className="toggle_button--line"></div>
            <div className="toggle_button--line"></div>
        </button>
    </div>
);

export default DrawerToggleButton;