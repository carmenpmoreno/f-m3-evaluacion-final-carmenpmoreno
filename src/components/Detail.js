import React from 'react';
import PropTypes from 'prop-types';

class Detail extends React.Component {

    render() {
        console.log(this.props);
        const {data} = this.props;
        const {characterId} = this.props.match.params;
        const item = data[characterId - 1];
        const {image, name, house, yearOfBirth, patronus, alive} = item;
        return(
            <main>
                <article>
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
    data: PropTypes.arrayOf(PropTypes.object),
    match: PropTypes.object,
}

export default Detail;