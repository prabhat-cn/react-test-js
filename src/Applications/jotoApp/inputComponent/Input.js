import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

// const Input = ({ success, secretWord }) => {
const Input = ({ secretWord }) => {
  // by mock "React.useState"
  const [currentGuess, setCurrentGuess] = React.useState('');
  const { success } = useSelector((state) => state.success);
  // for testing
  if (success) {
    return <div data-test="component-input" />;
  }

  return (
    <div data-test="component-input">
      <form className="form-online">
        <input
          data-test="input-box"
          className="mb-2 mx-sm-3"
          type="test"
          placeholder="Enter guess.."
          value={currentGuess}
          onChange={(event) => setCurrentGuess(event.target.value)}
        />
        <button
          data-test="submit-button"
          className="btn btn-primary mb-2"
          onClick={(evt) => {
            evt.preventDefault();
            setCurrentGuess('');
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
};
Input.propTypes = {
  secretWord: PropTypes.string.isRequired,
};

export default Input;
