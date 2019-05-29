import React from 'react';
import PropTypes from 'prop-types';
import List from './List';
import Filter from './Filter';
import './Home.scss';

class Home extends React.Component {
  render() {
    const {data, onInputChange, queryName, onRadioClick, houseValue} = this.props;
    return (
      <div className="home">
        <header>
          <h1>Harry Potter Characters</h1>
        </header>
            <main className="main">
                <Filter
                onInputChange = {onInputChange}
                queryName = {queryName}
                onRadioClick={onRadioClick}
                houseValue={houseValue}
                />
                <List 
                  data = {data}
                  queryName = {queryName}
                  houseValue={houseValue}
                />
              </main>
              {/* <footer>
                <p>footer</p>
                {/* <a 
                  className = "unsplash-link"
                  href="https://unsplash.com/@larm?utm_medium=referral&amp;utm_campaign=photographer-credit&amp;utm_content=creditBadge" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  title="Download free do whatever you want high-resolution photos from Larm Rmah">
                <span 
                  style="display:inline-block;padding:2px 3px">
                  <svg xmlns="http://www.w3.org/2000/svg" 
                    style="height:12px;width:auto;position:relative;vertical-align:middle;top:-2px;fill:white" viewBox="0 0 32 32">
                    <title>unsplash-logo</title>
                    <path d="M10 9V0h12v9H10zm12 5h10v18H0V14h10v9h12v-9z"></path>
                  </svg>
                </span>
                <span style="display:inline-block;padding:2px 3px">Larm Rmah</span>
                </a> */}
              {/* </footer> */} 
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
