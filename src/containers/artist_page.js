import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchArtistData } from '../actions/index';
import ArtistDetails from './artist_details';

class ArtistPage extends Component {

  constructor(props) {
    super(props);
    this.state = { searchParams: '' }
  }

  fetchData() {
    this.props.fetchArtistData(this.state.searchParams);
  }

  onChangeSearchParams(inputValue) {
    this.setState({searchParams: inputValue})
  }

  render() {
    return (
      <div>
        <div>
          <nav className = "deep-purple darken-4">
            <div className="nav-wrapper">
                <a href="#!" className="brand-logo">FoundSound</a>
              <ul className="right hide-on-med-and-down">
              <li><i href="#!" className="material-icons">play_circle_outline</i></li>
              <li><a className="btn-flat disabled" onClick={() => this.fetchData()}>
              Obter Informações</a></li>
              </ul>
            </div>
          </nav>
        </div>
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
          <ArtistDetails />
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
    artistData: state.artistData,
  };
}

export default connect(mapStateToProps, { fetchArtistData })(ArtistPage);
