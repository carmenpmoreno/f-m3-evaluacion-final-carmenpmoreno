import React from 'react';
import { Link } from 'react-router-dom';
import List from './List';

class Home extends React.Component {
  render() {
    return (
      <div className="home">
        <header>
          <h1>Harry Potter Characters</h1>
        </header>
        <main>
            <List />
        </main>
      </div>
    );
  }
}

export default Home;
