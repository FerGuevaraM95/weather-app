import React, { Component } from 'react';

import Header from '../Header/Header'

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header
          title='Clima App'
        />
      </div>
    );
  }
}

export default App;