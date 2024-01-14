import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import react from "react";
import Block from './components/Blocks';


var blocks = [];



function App() {
  return (
    <div className="App">
      <div className="topMenu"></div>
      <div className="mainArea">
        <ul>
          {blocks.map(block => (
            <Block id={block}></Block>
          ))}
        </ul>
      </div>
    </div>
  )
}

export function spawnBlock() {
  const name = "block" + blocks.length;
  blocks.push(name);
}



export default App;
