import React from 'react';
import PropTypes from 'prop-types';
import './Detail.scss';

class Detail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          data: [],
          fetchOk: false,
          queryName: ''
        };
      }
    componentDidMount() {
    this.getCharacters();
    }

    getCharacters() {
        fetch('https://hp-api.herokuapp.com/api/characters')
        .then(response => response.json())
        .then(data => {

            // const newData = data.map((item,index) => {
            // return {
            //     ...item,
            //     id: index + 1,
            // };
            // });

            this.setState({
            data: data,
            fetchOk: true
            });
        });
    }
  
    render() {
        const data = this.state.data;
        const {characterId} = this.props.match.params;
        const item = data[characterId - 1];
        const {image, name, house, yearOfBirth, patronus, alive} = item;
        return(
            <main>
                {item === undefined
                ? (<p>Data es undefined</p>)
                : (<article className= "detailArticle">
                <img className="detailImg" src={image} alt={name}/>
                <h2 className="detailName">{name}</h2>
                <p className="detailHouse">{house}</p>
                <p>{`Año de nacimiento: ${yearOfBirth}`}</p>
                <p>{`Patronus: ${patronus}`}</p>
                {alive
                ? <p>Estado al final de la saga: vivo</p>
                :<p>Estado al final de la saga: muerto</p>
                }
            </article>)}
            </main>
        );
    }
}

Detail.propTypes = {
    data: PropTypes.arrayOf(PropTypes.object),
    match: PropTypes.object,
}

export default Detail;