import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCepData } from '../actions/index';
import CepDetails from './cep_details';

class CepPage extends Component {

  constructor(props) {
    super(props);
    this.state = { searchParams: '' }
  }

  fetchData() {
    this.props.fetchCepData(this.state.searchParams);
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
              Buscar CEP!
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
            <CepDetails />
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
    cepData: state.cepData,
  };
}

export default connect(mapStateToProps, { fetchCepData })(CepPage);
