import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Home from './Home';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      characters: [],
      fetchOk: false
    }
  }

  componentDidMount() {
    this.getCharacters();
  }

  getCharacters() {
    fetch('http://hp-api.herokuapp.com/api/characters')
    .then(response => response.json())
    .then(characters => {
      return (
        this.setState({
          characters: [characters],
          fetchOk: true
        })
      );
      })
  }

  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </div>
    );
  }
}

export default App;
