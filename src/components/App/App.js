import React, { Component } from 'react';

import Header from '../Header/Header'
import Form from '../Form/Form'
import Error from '../Error/Error';

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

    const error = this.state.error;
    let result;

    if(error) {
        result = <Error message = 'Ambos campos son obligatorios' />
    }

    console.log(error);

    return (
      <div className="app">
        <Header
            title='Clima App'
        />
        <Form
        dataQuery = {this.dataQuery}
        />
        {result}
      </div>
    );
  }
}

export default App;