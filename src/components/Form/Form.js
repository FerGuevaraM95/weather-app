import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Form extends Component {

    // Crear los refs
    countryRef = React.createRef();
    cityRef = React.createRef();


    searchWeather = (e) => {
        e.preventDefault();
        // Leer los refs y crear el objeto
        const response = {
            country: this.countryRef.current.value,
            city : this.cityRef.current.value
        }

        // Enviar por props
        this.props.dataQuery(response);

        // Opcional resetear el form
    }

    render() { 
        return <div className="form-container">
            <div className="container">
              <div className="row">
                    <form onSubmit={this.searchWeather}>
                        <div className="input-field col s12 m8 l4 offset-m2">
                            <select ref={this.countryRef}>
                                <option value="" defaultValue >
                                    Elige un País
                                </option>
                                <option value="AR">Argentina</option>
                                <option value="CO">Colombia</option>
                                <option value="CR">Costa Rica</option>
                                <option value="ES">España</option>
                                <option value="US">Estados Unidos</option>
                                <option value="MX">México</option>
                                <option value="PE">Perú</option>
                            </select>
                            <label htmlFor="country">País</label>
                        </div>
                        <div className="input-field col s12 m8 l4 offset-m2">
                            <input ref={this.cityRef} id="city" type="text" />
                            <label htmlFor="city">Ciudad:</label>
                        </div>
                        <div className="input-field col s12 m8 l4 offset-m2 search">
                            <input type="submit" className="waves-effect waves-light btn-large yellow accent-4" value="Buscar..."/>
                        </div>
                    </form>
              </div>
            </div>
          </div>;
    }
}

Form.propTypes = {
    dataQuery: PropTypes.func.isRequired
}
 
export default Form;