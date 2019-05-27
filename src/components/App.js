import React from 'react';
import './App.scss';
import { Route, Switch } from 'react-router-dom';
import Home from './Home';
import Detail from './Detail';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      fetchOk: false,
      queryName: ''
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const { value } = event.target;
    console.log(value);
    this.setState(prevState => {
      return {
        ...prevState,
        queryName: value
      };
    });
  }

  componentDidMount() {
    this.getCharacters();
  }

  getCharacters() {
    fetch('https://hp-api.herokuapp.com/api/characters')
      .then(response => response.json())
      .then(data => {

        const newData = data.map((item,index) => {
          return {
            ...item,
            id: index + 1,
          };
        });

        this.setState({
          data: newData,
          fetchOk: true
        });
      });
  }

  render() {
    const { data, fetchOk, queryName } = this.state;
    return (
      <div className="App">
        <Switch>
          <Route
            exact path="/"
            render={() => (
              <Home
                data={data}
                fetchOk={fetchOk}
                onInputChange={this.handleInputChange}
                queryName={queryName}
              />
            )}
          />
          <Route
            path="/character-detail/:characterId"
            render={routerProps => 
                <Detail
                  match={routerProps.match}
                  data={data}
                  state={this.state}
                  fetchOk={fetchOk}
                />
            }
          />
        </Switch>
      </div>
    );
  }
}

export default App;
