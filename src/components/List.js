import React from 'react';
import Card from './Card';
import './List.scss';

class List extends React.Component {
  render() {
    console.log('las props.data de list', this.props.data);
    const { data } = this.props;
    return (
      <ul className="list">
        {data.map(item => {
          return (
            <li className="itemList" key={item.index}>
              <Card name={item.name} image={item.image} house={item.house} />
            </li>
          );
        })}
      </ul>
    );
  }
}

export default List;
