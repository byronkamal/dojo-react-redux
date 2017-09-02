import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Hello from './components/helloworld.js'



const App = ()=>{
    return <Hello />;
};


//Take the component generated HTM and put it om the page
ReactDOM.render(<App />, document.getElementById('container'));
