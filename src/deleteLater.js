import logo from './logo.svg';
import ProblemList from './components/problemList';
import ProblemsScreen from './screens/Problems/ProblemsScreen'
function deleteLater() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}

      <ProblemsScreen/>

    </div>
  );
}

export default deleteLater;
