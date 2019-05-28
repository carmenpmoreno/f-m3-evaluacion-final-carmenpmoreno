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
      queryName: '',
      house: '',
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleInputHouse = this.handleInputHouse.bind(this);
  }

  handleInputChange(event) {
    const { value } = event.target;
    this.setState(prevState => {
      return {
        ...prevState,
        queryName: value
      };
    });
  }

  handleInputHouse(event) {
    const { value } = event.target;
    console.log(value);
    this.setState(prevState => {
      return {
        ...prevState,
        house: value
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
    const { data, fetchOk, queryName, house } = this.state;
    return (
      <div className="App">
        {fetchOk
          ? (<Switch>
            <Route
              exact path="/"
              render={() => (
                <Home
                  data={data}
                  onInputChange={this.handleInputChange}
                  queryName={queryName}
                  handleInputHouse = {this.handleInputHouse}
                  house = {house}

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
          </Switch>)
          : <p className="homeLoading">Loading...</p>
        }
        
      </div>
    );
  }
}

export default App;
