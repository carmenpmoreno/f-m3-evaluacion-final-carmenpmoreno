import React from 'react';
import PropTypes from 'prop-types';
import './Card.scss';

class Card extends React.Component {
  render() {
    const { name, image, house } = this.props;
    return (
      <div className="characterCard">
        <h2 className="cardName">{name}</h2>
        <img className="cardImg" src={image} alt={name}/>
        <h3 className="cardHouse">{house}</h3>
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
