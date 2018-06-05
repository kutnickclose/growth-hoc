import React, { Component } from 'react';
import withExperiment from '../../utils/experiment.js';

class Home extends Component {
  render() {
    return (
      <div>
        <button>
          {this.props.showVariation ? "Continue" : "Sign Up"}
        </button>
      </div>
    );
  }
}

export default withExperiment('signUpCopyChange', Home)
