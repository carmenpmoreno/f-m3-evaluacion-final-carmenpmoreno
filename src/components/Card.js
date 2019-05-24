import React from 'react';
import './Card.scss';

class Card extends React.Component {
  render() {
    console.log('las props de card', this.props);
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

export default Card;
