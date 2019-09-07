import React from 'react';
import logo from './logo.svg';
import './App.css';
import First from './first';

function App() {
  return (
    <div id="outer_div">
      <div id="hello_text">Hello This is my First React App</div>
      <div id="input_outer_div">
        <input id="input_field" placeholder="Enter todo"></input>
        <button id="submit_button">Submit</button>
      </div>
      <ul className="ul">
        {
          a()
        }
      </ul>
      
        <First />
      
    </div>
  );
}

function a(){
  var arr=[];
  for(var i=0;i<100;i++){
    arr.push(<li>{i}</li>);
  }
  return arr;
}

export default App;
