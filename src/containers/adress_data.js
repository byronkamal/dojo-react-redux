import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchAdressData } from '../actions/index';
//corrigir adress para address
class AdressData extends Component {

    constructor(props) {
        super(props);
        this.state = { adressSearchParams: '' }
    }

    fetchData(){
        this.props.fetchAdressData(this.state.adressSearchParams);
    }



    onChangeAdressSearchParams(adressString){
        this.setState({ adressSearchParams: adressString})
    }

    renderSearch() {
      return (
        <div className="row">
            <div className="col s10">
                <input
                    value={ this.state.adressSearchParams }
                    onChange={(event)=>this.onChangeAdressSearchParams(event.target.value)}>
                </input>
            </div>
            <div className="col s2">
                <a className="waves-effect waves-light btn"
                   onClick={()=>this.fetchData()}>
                   Buscar
                </a>
            </div>
        </div>
      );
    }

    render() {
        console.log(this.props.adressData);
        //adressData.results[0].address_components[cepIndex]
        //console.log(adressData);//Sem receber nada do input ele retorna undefined, so retona algum objeto
        //depois que o input muda de valor


        /*
        Vitor, o único problema é que você estava renderizando um JSX sem ter chegado a resposta da API,
        para isso, criei uma condicional. se this.props.adressData.results existe, então você pode dar render,
        se não, da render numa div "Faça sua busca"

        Agora concorda que independente da resposta da API eu preciso dar render na busca?
        Daí criei uma função renderSearch() que renderiza a barrinha de pesquisa, independente da resposta da api.
        Então se a resposta existe, ele renderiza a barrinha, mais os resultados;
        Se não existe, ele renderiza a barrinha de pesquisa e uma div = "Faça sua busca!"
        */
        if(this.props.adressData.results) {
          const adressData = this.props.adressData.results[0];
          const cepIndex = (adressData.address_components.length) - 1;
          console.log(adressData);
          return (
              <div>
                {this.renderSearch()}
                  <div className="row">
                      <div className="col s3">
                          <br />
                      </div>
                      <div className="col s6">
                      <div className="card">
                          <div className="card-content">
                              <p>{ }</p>
                          </div>
                          <div className="card-tabs">
                              <ul className="tabs tabs-fixed-width">
                                  <li className="tab"><a href="#CEP">CEP</a></li>
                                  <li className="tab"><a className="active" href="#pais">País</a></li>
                                  <li className="tab"><a href="#cidade">Cidade</a></li>
                              </ul>
                          </div>
                          <div className="card-content grey lighten-4">
                                <div id="CEP">{adressData.address_components[cepIndex-1].short_name}</div>
                                <div id="pais">{adressData.address_components[cepIndex-2].short_name}</div>
                                <div id="cidade">{adressData.address_components[cepIndex-3].short_name}</div>
                            </div>
                        </div>
                      </div>
                      <div className="col s3">
                          <br />
                      </div>
                  </div>
              </div>
          );
        } else {
          return (
            <div>
              {this.renderSearch()}
              <div> Faça sua Busca </div>
            </div>
          );
      }
    }
}

function mapStateToProps(state){
    return{
        adressData: state.adressData
    }
}

export default connect(mapStateToProps, { fetchAdressData })(AdressData);
