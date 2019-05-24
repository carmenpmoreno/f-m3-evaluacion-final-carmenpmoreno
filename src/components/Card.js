import React from 'react';

class Card extends React.Component {
  render() {
    console.log('las props de card', this.props);
    const { name, image, house } = this.props;
    return (
      <div className="character-card">
        <h2>{name}</h2>
        <img src={image} alt={name}/>
        <h3>{house}</h3>
      </div>
    );
  }
}

export default Card;
