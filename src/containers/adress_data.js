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


    render(){
        const adressData = this.props.adressData;
        var cepIndex = adressData.results[0].address_components.length-1;
        //console.log(adressData);//Sem receber nada do input ele retorna undefined, so retona algum objeto
        //depois que o input muda de valor
        return (

            <div>
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
                <div className="row">
                    <div className="col s3">
                        <br />
                    </div>
                    <div className="col s6">
                    <div className="card">
                        <div className="card-content">
                            <p>{ adressData.results[0].formatted_address }</p>
                        </div>
                        <div className="card-tabs">
                            <ul className="tabs tabs-fixed-width">
                                <li className="tab"><a href="#CEP">CEP</a></li>
                                <li className="tab"><a className="active" href="#pais">País</a></li>
                                <li className="tab"><a href="#cidade">Cidade</a></li>
                            </ul>
                        </div>
                        <div className="card-content grey lighten-4">
                              <div id="CEP">{ adressData.results[0].address_components[cepIndex] }</div>
                              <div id="pais">{ adressData.results[0].address_components[cepIndex-1] }</div>
                              <div id="cidade">{ adressData.results[0].address_components[cepIndex-2] }</div>
                          </div>
                      </div>
                    </div>
                    <div className="col s3">
                        <br />
                    </div>
                </div>
            </div>
        );
    }


}

function mapStateToProps(state){
    return{
        adressData: state.adressData
    }
}

export default connect(mapStateToProps, { fetchAdressData })(AdressData);
