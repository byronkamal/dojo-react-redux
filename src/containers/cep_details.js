import React, { Component } from 'react';
import { connect } from 'react-redux';

class CepDetails extends Component {
  render() {
    const cepData = this.props.cepData;
    return (
      <div>
        <div class="divider"></div>
        <div class="section">
          <h5>Logradouro</h5>
          <p>{ cepData.logradouro }</p>
        </div>
        <div class="divider"></div>
        <div class="section">
          <h5>Complemento</h5>
          <p>{ cepData.complemento }</p>
        </div>
        <div class="divider"></div>
        <div class="section">
          <h5>Bairro</h5>
          <p>{ cepData.bairro }</p>
        </div>
        <div class="divider"></div>
        <div class="section">
          <h5>Cidade</h5>
          <p>{ cepData.localidade }</p>
        </div>
        <div class="divider"></div>
        <div class="section">
          <h5>UF</h5>
          <p>{ cepData.uf }</p>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    cepData: state.cepData,
  }
}


export default connect(mapStateToProps)(CepDetails);
