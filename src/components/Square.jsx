import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

function Square(props) {

    return (
      <button className="square"
      onClick={() => props.onClick()}>
        {props.value}
      </button>
    );
  }

Square.PropTypes = {
  squares: PropTypes.object
};

const mapStateToProps = state => {
  return {
    squares: state.squares
  }
}

export default Square;
