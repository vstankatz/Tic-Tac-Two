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

export default Square;
