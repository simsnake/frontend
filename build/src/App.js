import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import react from "react";



function App() {
  return (
    <div className="App">
      <div className="topMenu">
        <Header />

      </div>
    </div>
  )
}

function dark() {
  document.body.setAttribute("data-theme", "dark-theme");
}

function openPreferences() {

}

export default App;
