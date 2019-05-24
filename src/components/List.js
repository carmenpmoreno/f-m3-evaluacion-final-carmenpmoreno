import React from 'react';

class List extends React.Component {
  render() {
    console.log("las props.data de list", this.props.data)
    const {data} = this.props;
    return (
      <ul>
        {data.map(item=> {
          return <li>{item.name}</li>
        })}
      </ul>
    );
  }
}

export default List;
