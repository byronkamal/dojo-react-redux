import React, { Component } from 'react';
import { connect } from 'react-redux';

class ArtistDetails extends Component {
  render() {
    const artistData = this.props.artistData;
    return (
      <div>
        <h2>{artistData.Name}</h2>
        <ul className="collection">
          <li className="collection-item">Contador de Plays: {artistData.playcount}</li>
          <li className="collection-item">Ouvintes: {artistData.listeners}</li>
          <li className="collection-item">Artista: {artistData.artist}</li>

        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    artistData: state.artistData,
  }
}


export default connect(mapStateToProps)(ArtistDetails);
