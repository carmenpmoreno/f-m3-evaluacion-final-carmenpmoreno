import React from 'react';
import PropTypes from 'prop-types';
import List from './List';
import Filter from './Filter';
import './Home.scss';

class Home extends React.Component {
  render() {
    const {data, onInputChange, queryName, handleInputHouse, house} = this.props;
    return (
      <div className="home">
        <header>
          <h1>Harry Potter Characters</h1>
        </header>
            <main className="main">
                <Filter
                onInputChange = {onInputChange}
                queryName = {queryName}
                handleInputHouse = {handleInputHouse}
                house = {house}
                />
                <List 
                  data = {data}
                  queryName = {queryName}
                  house = {house}
                />
              </main>
      </div>
    );
  }
}

Home.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  onInputChange: PropTypes.func.isRequired,
  queryName: PropTypes.string.isRequired,
}


export default Home;
