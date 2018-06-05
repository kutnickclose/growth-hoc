// with_experiment.js
import startExperiment from '../actions/experiment';
import React from 'react';
import { connect } from 'react-redux';

const withExperiment = (experimentName, WrappedComponent) => {
  class Experiment extends React.Component {
    // start the experiment (or continue if already in experiment)
    // this will do the following
    // 1) make an API request to the server asking for 
    //    which variation the user is in
    // 2) set Redux Store state to something like 
    //    { copyTest: 'control' }
    componentDidMount() {
      this.props.startExperiment(experimentName);
    }
    // if we haven't fetched experiment yet, render nothing
    // otherwise render the component with the original 
    // props and the showVariation prop included
    render() {
      const { [experimentName]: variation, ...rest } = this.props;
      if (variation === undefined) return null;
      return <WrappedComponent {...rest} />;
    }
  }
  
  // add showVariation and the experimentName to props
  const mapStateToProps = state => ({
    showVariation: state.experiments[experimentName] !== 'control',
    [experimentName]: state.experiments[experimentName], 
  });
  
  const mapDispatchToProps = dispatch => ({
    startExperiment: name => dispatch(startExperiment(name)),
  });
  
  return connect(mapStateToProps, mapDispatchToProps)(Experiment);
}

export default withExperiment;