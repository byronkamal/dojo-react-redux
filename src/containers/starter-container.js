import React, { Component } from 'react';
import { connect } from 'react-redux';


class StarterContainer extends Component {
  render_message() {
    return this.props.starter.map((starter) => {
      return (<h1 key={starter.message}>{starter.message}</h1>);
    });
  }

  render() {
    return (
      <div>{this.render_message()}</div>
    );
  }

}

function mapStateToProps(state) {
  return {
    starter: state.starter
  };
}

export default connect(mapStateToProps)(StarterContainer);
