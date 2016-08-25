import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { actions } from './actions';

const name = 'hello';

function mapStateToProps(state) {
  return {
    loading: state.getIn([name, 'loading']),
    greeting: state.getIn([name, 'greeting']),
  };
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(actions, dispatch) };
}

@connect(mapStateToProps, mapDispatchToProps)
class Component extends React.Component {
  componentDidMount() {
    this.props.actions.load();
  }
  render() {
    const { loading, greeting } = this.props;

    if (loading) {
      return <h2> Loading... </h2>;
    }

    return <h1>{ greeting } </h1>;
  }
}

const { object, string, bool } = React.PropTypes;
Component.propTypes = {
  actions: object,
  loading: bool,
  greeting: string,
};


export { name, Component };
