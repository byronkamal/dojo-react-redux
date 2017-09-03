import React, { Component } from 'react';


/*
const Hello = (props) => {
  console.log(props);
  return (
    <h1>{ props.name }</h1>
  );
};

*/

class Hello extends Component {

  constructor(props) {
    super(props);
    this.state = { name: "Augusto"}
  }

  changeState() {
    console.log("Clicando!");
    this.setState({name: "Mudou Caralho!"});
  }

  render() {
    console.log(this.props);
    return (
      <div>
        <h1 onClick={() => this.changeState()}>
          Clique Aqui
        </h1>
        <h1>{this.props.name}</h1>
        <h1>{this.state.name}</h1>
      </div>
    );
  }
}


export default Hello;
