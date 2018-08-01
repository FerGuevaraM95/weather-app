import React, { Component } from 'react';

import Header from '../Header/Header'
import Form from '../Form/Form'

class App extends Component {

  state = {
    error: ''
  }

  componentDidMount() {
    this.setState({
      error: false
    })
  }

  dataQuery = (response) => {
    if(response.country === '' || response.city === '') {
      this.setState({
        error: true
      })
    } else {
      console.log('todo fine');
    }
  }

  render() {
    return (
      <div className="app">
        <Header
          title='Clima App'
        />
        <Form
        dataQuery = {this.dataQuery}
        />
      </div>
    );
  }
}

export default App;