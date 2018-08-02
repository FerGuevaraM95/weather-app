import React, { Component } from 'react';

import Header from '../Header/Header'
import Form from '../Form/Form'
import Error from '../Error/Error';

class App extends Component {

    state = {
        error: '',
        query: {},
        result: {}
    }

    componentDidUpdate() {
        this.consultApi();
    }

    componentDidMount() {
    this.setState({
        error: false
    })
    }

    consultApi = () => {
        const { country, city } = this.state.query;
        if (!country || !city) return null;

        // Leer la url y agregar la API key
        const appId = 'f8b150c5cef3ce9d15f9f0c30667930f';
        let url = `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${appId}`;

        
        // Query con fetch API
        fetch(url)
            .then(response => {
                return response.json();
            })
            .then(data => {
                // console.log(data);

                this.setState({
                    result: data
                })
            })
            .catch(error => {
                console.log(error);
            })

    }

    dataQuery = (response) => {
    if(response.country === '' || response.city === '') {
        this.setState({
            error: true
        })
    } else {
        this.setState({
            query : response
        })
    }
    }

    render() {

    const error = this.state.error;
    let result;

    if(error) {
        result = <Error message = 'Ambos campos son obligatorios' />
    }

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