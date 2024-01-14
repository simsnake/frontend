import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import React from 'react';
import Block from './components/Block';


var blocks = [];

function App() {

  return (
    <>
      {
<<<<<<< HEAD
        <div className="App">
          <div className="topMenu"></div>
          <div className="mainArea">
            <ul>
              {blocks.map(block => (
                <Block className={block}></Block>
              ))}
            </ul>
          </div>
        </div >
=======
        themeLoaded && <ThemeProvider theme={selectedTheme}>
          <GlobalStyles />
          <Container style={{ fontFamily: selectedTheme.font }}>
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
          </Container>
        </ThemeProvider>
>>>>>>> parent of b2c233b (added block offsetting)
      }
    </>
  );
}

export function spawnBlock() {
  const name = "block" + blocks.length;
  blocks.push(name);
  console.log(blocks.length);
}





export default App;
