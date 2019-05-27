import React from 'react';
import PropTypes from 'prop-types';
import './Card.scss';

class Card extends React.Component {
  render() {
    const { name, image, house } = this.props;
    return (
      <div className="characterCard">
        <img className="cardImg" src={image} alt={name}/>
        <h2 className="cardName">{name}</h2>
        <p className="cardHouse">{house}</p>
      </div>
    );
  }
}

Card.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  house: PropTypes.string.isRequired
}

export default Card;
