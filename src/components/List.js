import React from 'react';
import Card from './Card';

class List extends React.Component {
  render() {
    console.log("las props.data de list", this.props.data)
    const {data} = this.props;
    return (
      <ul>
        {data.map((item)=> {
          return <li key={item.index}>
            <Card
              name= {item.name}
              image= {item.image}
              house = {item.house}
            />
          </li>
        })}
      </ul>
    );
  }
}

export default List;
