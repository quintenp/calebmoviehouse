import React from 'react';
import PropTypes from 'prop-types';

const BadWordMessage = ({ message }) => {
    return (
        <div>
            <span className="alert alert-danger">{message}</span>
        </div>
    );
};

BadWordMessage.propTypes = {
   message: PropTypes.string.isRequired
};

export default BadWordMessage;