import * as React from 'react';

import logo from './logo.svg';

class App extends React.Component {
  public render() {
    return (
      <div className="text-center">
        <header className="bg-purple-darker m-6 rounded shadow-lg">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="text-white text-3xl">Welcome to React</h1>
        </header>
        <p className="text-base">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
