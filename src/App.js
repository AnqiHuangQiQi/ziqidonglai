import './App.css';
import Logo from './images/qiqi_logo.png'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={Logo} className="App-logo" alt ="qiqi_logo"/>
        <p>
          QiQi's Gallery
        </p>
        <a
          className="App-link"
          href="https://qiqi77.azurewebsites.net/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Sky Series
        </a>
        <a
          className="App-link"
          href="https://qiqi77.azurewebsites.net/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Ocean Series
        </a>
      </header>
    </div>
  );
}

export default App;
