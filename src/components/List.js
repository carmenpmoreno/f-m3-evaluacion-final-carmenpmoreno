import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';
import './List.scss';


class List extends React.Component {
  render() {
    console.log('las props.data de list', this.props.data);

    const { data } = this.props;

    return (
      <ul className="list">
        {data.map((item,index) => {
          console.log('index de cada item + 1', index + 1);
          return (
            <li className="itemList" key={index + 1} id={index + 1}>
              <Card 
                name={item.name} 
                image={item.image} 
                house={item.house} 
              />
            </li>
          );
        })}
      </ul>
    );
  }
}

List.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default List;
