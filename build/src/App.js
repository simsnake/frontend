import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import React from 'react';
import Block from './components/Block';



function App() {

  return (
    <>
      {
            <div className="App">
              <div className="topMenu"></div>
              <Block idString="block1" headerString="header1" />
              <Block idString="block2" headerString="header2" />
            </div>
      }
    </>
  );
}


export function spawnBlock() {
  const name = "block" + blocks.length;
  blocks.push(name);

}





export default App;
