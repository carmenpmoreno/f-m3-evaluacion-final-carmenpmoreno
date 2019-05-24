import React from 'react';
import List from './List';
import './Home.scss';

class Home extends React.Component {
  render() {
    console.log("las props.data de home", this.props.data)
    return (
      <div className="home">
        <header>
          <h1>Harry Potter Characters</h1>
        </header>
        <main className="main">
            <List 
                data = {this.props.data}
            />
        </main>
      </div>
    );
  }
}

export default Home;
