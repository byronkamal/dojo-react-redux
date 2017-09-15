import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchMovieData } from '../actions/index';
import { browserHistory } from 'react-router';

class SearchMovie extends Component {

  constructor(props) {
    super(props);
    this.state = { searchParams: '' }
  }

  fetchData() {
    this.props.fetchMovieData(this.state.searchParams);
  }

  onChangeSearchParams(inputValue) {
    this.setState({searchParams: inputValue})
  }

  render() {
    return (
      <div>
        <div className="row">
          <div className="col s4">
            <br />
          </div>
          <div className="col s4">
            <br/>
            <input
              value={this.state.searchParams}
              onChange={(event) => this.onChangeSearchParams(event.target.value)}>
            </input>
            <a className="waves-effect waves-light btn-large"
                onClick={() => this.fetchData()}>
              Puxar dados!
            </a>
          </div>
          <div className="col s4">
            <br />
          </div>
        </div>
        <div className="row">
          <div className="col s4">
            <br/>
          </div>
          <div className="col s4">
            <br />
          </div>
          <div className="col s4">
            <br/>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    movieData: state.movieData,
  };
}

export default connect(mapStateToProps, { fetchMovieData })(SearchMovie);
