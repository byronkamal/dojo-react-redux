import React, { Component } from 'react';
import { connect } from 'react-redux';

class ArtistDetails extends Component {
  render() {
    /*
    Sugiro dar uma olhada no resultado desse print no console do browser, tem bastante
    coisa legal nessa API que dá pra mostrar.

    Lembrando que: this.props.artistData, é um objeto com um objeto chamado artist dentro dele,
    então não dá pra acessar os dados diretamente por this.props.artistData;
    para acessar os dados é necessário this.props.artistData.artist;
    */
    console.log(this.props.artistData); // Mostrará no console: Object {artist: Object}

    /*
    Render condicional; Como o request dura bastante para ser realizado,
    antes de fazer o render do meu conteúdo, eu preciso verificar se o conteúdo
    existe de fato. Portanto eu verifico se this.props.artistData.artist é diferente
    de null ou undefined, se for ele renderiza o que eu quero, caso contrário, renderiza um texto
    "aguardando resultado;"

    */
    if(this.props.artistData.artist) {
      //const artistData = this.props.artistData;
      const artist = this.props.artistData.artist;
      return (
        <div>
          <h2>{artist.name}</h2>
          <img src = {artist.image[1]}></img>

          <ul className="collection">
            <li className="collection-item">Playcont: { artist.stats.playcount }</li>
            <li className="collection-item">Listeners: {artist.stats.listeners}</li>
            <li className="collection-item">Artist: { artist.name }</li>
            <li className="collection-item">Last FM URL: { artist.url }</li>
            <li className="collection-item">Biography: { artist.bio.summary }</li>
          </ul>
        </div>
      );
    } else {
      return <div>Wating...</div>;
    }

  }
}

function mapStateToProps(state) {
  return {
    artistData: state.artistData,
  }
}


export default connect(mapStateToProps)(ArtistDetails);
