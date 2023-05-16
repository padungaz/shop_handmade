import React from 'react';

import { Link } from 'react-router-dom';

Text.propTypes = {

};

function Text(props) {
    return (
        <div className='text'>
            <Link to="/login">
                <h5>Log In</h5>
            </Link>
            <Link to="/signup">
                <h5>Sign Up</h5>
            </Link>
        </div>
    );
}

export default Text;