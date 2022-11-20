import '../App.css';
import Logo from '../images/qiqi_logo.png';
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <div><img src={Logo} className="App-logo" alt ="qiqi_logo"/></div>
        <p>
          QiQi's Gallery
        </p>
        <Link
          className="App-link"
          to="/sky"
          target = "_blank"
          rel="Sky"
        >
          Sky Series
        </Link>
        <Link
          className="App-link"
          to="/"
          target = "_blank"
          rel="Ocean"
        >
          Ocean Series
        </Link>
        <Link
          className="App-link"
          to="/thebookofanswers"
          target = "_blank"
          rel="thebookofanswers"
        >
          The Book of Answers
        </Link>
        <Link
          className="App-link"
          to="/decisionmaker"
          target = "_blank"
          rel="decisionmaker"
        >
          Decision Maker
        </Link>
      </header>
    </div>
  );
}

export default Home;
