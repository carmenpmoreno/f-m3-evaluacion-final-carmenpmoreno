import React from 'react';

class Detail extends React.Component {

    render() {
        const {data} = this.props;
        const {characterId} = this.props.match.params;
        const item = data[characterId - 1];
        const {alive} = item;
        return(
            <main>
                <article>
                    <img className="detailImg" src={item.image} alt={item.name}/>
                    <h2 className="detailName">{item.name}</h2>
                    <p className="detailHouse">{item.house}</p>
                    <p>{`Año de nacimiento: ${item.yearOfBirth}`}</p>
                    <p>{`Patronus: ${item.patronus}`}</p>
                    {alive
                    ? <p>Estado al final de la saga: vivo</p>
                    :<p>Estado al final de la saga: muerto</p>
                    }
                </article>
            </main>
        );
    }
}

export default Detail;