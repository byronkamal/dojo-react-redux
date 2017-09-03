import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Hello from './components/helloworld.js'
import Exemplo from './components/exemplo.js';



const App = () => {
    return (
      <div>
        <Hello name={"Tulio"} age={21}/>
        <Exemplo name={"Luciana"} />
      </div>
    )
};


//Take the component generated HTM and put it om the page
ReactDOM.render(<App />, document.getElementById('container'));
