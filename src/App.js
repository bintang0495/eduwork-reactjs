import logo from "./logo.svg";
import "./App.css";

import Component from "./materi/Component";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
          <Component />
        </div>
      </header>
    </div>
  );
}

export default App;
