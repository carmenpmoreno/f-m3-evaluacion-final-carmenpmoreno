import React from 'react';
import './App.scss';
import { Route, Switch } from 'react-router-dom';
import Home from './Home';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      fetchOk: false,
      queryName: '',
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const {value} = event.target;
    console.log(value);
  }

  componentDidMount() {
    this.getCharacters();
  }

  // TODO: PONER LOADING EN ESTA FUNCIÓN, CUANDO FETCHOK: FALSE
  getCharacters() {
    fetch('http://hp-api.herokuapp.com/api/characters')
      .then(response => response.json())
      .then(data => {
        return this.setState({
          data: data,
          fetchOk: true
        });
      });
  }

  render() {
    const {data, fetchOk, queryName} = this.state;
    return (
      <div className="App">
        <Switch>
          <Route
            path="/"
            render={() => (
              <Home
                data= {data}
                fetchOk = {fetchOk}
                onInputChange = {this.handleInputChange}
                queryName = {queryName}
              />
            )}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
