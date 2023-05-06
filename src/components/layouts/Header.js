import React, { StrictMode } from 'react'
import PropTypes from 'prop-types';

const Header = (props) => {

  // Without destructuring use props.branding in h1
  const { branding } = props;
  return (
    // Two ways to render a css
    /*<div>
        <h1 style={{ color: 'red', fontSize: '50px ' }}>{branding}</h1>
        <h1 style={headingStyle}>{branding}</h1>
    </div>*/
    <nav className='navbar navbar-expand-sm navbar-dark bg-primary mb-3 py-0'>
        <div className='container'>
            <a href='/' className='navbar-brand'>
                {branding}
            </a>
            <div>
                <ul className='navbar-nav mr-auto'>
                    <li className='nav-item'>
                        <a href='/' className='nav-link'>
                            Home
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
  );
};

// If nothing is passed in App.js, this is the default
Header.defaultProps = {
    branding: 'My App'
};

// Type validation
Header.propTypes = {
    branding: PropTypes.string.isRequired
};

//const headingStyle = {
    //color: 'blue',
    //fontSize: '15px',
    //paddingLeft: '50px'
//};

export default Header; 
