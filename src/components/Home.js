import React from 'react';
import PropTypes from 'prop-types';
import List from './List';
import './Home.scss';

class Home extends React.Component {
  render() {
    console.log("las props.fetchOk de home", this.props.fetchOk)
    const {data, fetchOk} = this.props
    return (
      <div className="home">
        <header>
          <h1>Harry Potter Characters</h1>
        </header>
          {fetchOk
            ? (<main className="main">
                <List 
                  data = {data}
                />
              </main>)
            : <p>Loading...</p>}
      </div>
    );
  }
}

Home.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  fetchOk: PropTypes.bool.isRequired
}


export default Home;
