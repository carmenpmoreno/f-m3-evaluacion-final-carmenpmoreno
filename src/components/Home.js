import React from 'react';
import PropTypes from 'prop-types';
import List from './List';
import Filter from './Filter';
import './Home.scss';

class Home extends React.Component {
  render() {
    const {data, fetchOk, onInputChange, queryName} = this.props;
    return (
      <div className="home">
        <header>
          <h1>Harry Potter Characters</h1>
        </header>
          {fetchOk
            ? (<main className="main">
                <Filter
                onInputChange = {onInputChange}
                />
                <List 
                  data = {data}
                  queryName = {queryName}
                />
              </main>)
            : <p>Loading...</p>}
      </div>
    );
  }
}

Home.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  fetchOk: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func,
  queryName: PropTypes.string,
}


export default Home;
