// receive the success state
/**
 * Functional react component for congratulatory message.
 * @function
 * @param {object} props - React props.
 * @returns {JSX.Element} - Rendered component (or null if `success` prop is false).
 */
import React from 'react';
import PropTypes from 'prop-types';

// const Congrats = ({ success }) => {

const Congrats = (props) => {
  if (props.success) {
    return (
      <div data-test="component-congrats" className="alert alert-success">
        <span data-test="congrats-message">
          Congratulations! You guessed the word!
        </span>
      </div>
    );
  } else {
    return <div data-test="component-congrats" />;
  }
};

// pass here for testing
Congrats.propTypes = {
  success: PropTypes.bool.isRequired,
};

export default Congrats;
