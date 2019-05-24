import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Home from './Home';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      fetchOk: false
    };
  }

  componentDidMount() {
    this.getCharacters();
  }
  // TODO: PONER LOADING EN ESTA FUNCIÓN, CUANDO FETCHOK: FALSE
  getCharacters() {
    fetch('http://hp-api.herokuapp.com/api/characters')
      .then(response => response.json())
      .then(data => {
        console.log(data);
        return this.setState({
          data: data,
          fetchOk: true
        });
      });
  }

  render() {
    console.log("data en App", this.state.data);
    return (
      <div className="App">
        <Switch>
          <Route
            path="/"
            render={() => (
              <Home
                data= {this.state.data}
              />
            )}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
