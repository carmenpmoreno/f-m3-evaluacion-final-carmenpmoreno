import React from 'react';

class Detail extends React.Component {

    render() {
        console.log(this.props.match);

        const {data} = this.props;
        const characterId = this.props.match.params.characterId;
        const item = data[characterId - 1];
        const alive = item.alive;

        console.log(item);
        console.log(characterId);
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