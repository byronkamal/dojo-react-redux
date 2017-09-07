import React, { Component } from 'react';
import { connect } from 'react-redux';

class MovieDetails extends Component {
  render() {
    const movieData = this.props.movieData;
    return (
      <div>
        <h2>{movieData.Title}</h2>
        <img src={movieData.Poster}></img>
        <ul className="collection">
          <li className="collection-item">Ano de Lançamento: {movieData.Year}</li>
          <li className="collection-item">Gênero do Filme: {movieData.Genre}</li>
          <li className="collection-item">Diretor: {movieData.Director}</li>
          <li className="collection-item">Atores: {movieData.Actors}</li>
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    movieData: state.movieData,
  }
}


export default connect(mapStateToProps)(MovieDetails);
