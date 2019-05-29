import React from 'react';
import PropTypes from 'prop-types';
import './Detail.scss';

class Detail extends React.Component {
    render() {
        const {data} = this.props;
        const {characterId} = this.props.match.params;
        const item = data[characterId - 1];
        // buscar con .find ...
        const {image, name, house, yearOfBirth, patronus, alive} = item;
        return(
            <main>
                <article className= "detailArticle">
                <img className="detailImg" src={image} alt={name}/>
                <h2 className="detailName">{name}</h2>
                <p className="detailHouse">{house}</p>
                <p>{`Año de nacimiento: ${yearOfBirth}`}</p>
                <p>{`Patronus: ${patronus}`}</p>
                    {alive
                    ? <p>Estado al final de la saga: vivo</p>
                    :<p>Estado al final de la saga: muerto</p>
                    }
                </article>
            </main>
        );
    }
}

Detail.propTypes = {
    data: PropTypes.arrayOf(PropTypes.object).isRequired,
    match: PropTypes.object.isRequired,
}

export default Detail;