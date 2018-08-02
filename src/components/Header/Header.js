import React from 'react';
import PropTypes from "prop-types";

const Header = (props) => {
    return (
        <header>
            <nav className="nav-wrapper light-blue darken-2" >
                <a className="brand-logo">{props.title}</a>
            </nav>
        </header>
    );
};

Header.propTypes = {
    title: PropTypes.string.isRequired
}

export default Header;