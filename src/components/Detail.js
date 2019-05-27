import React from 'react';

class Detail extends React.Component {
    render() {
        console.log(this.props.data);
        const data = this.props.data;
        const characterId = this.props.match;
        console.log(characterId);
        return(
            <main>
                <p>El character seleccionado es</p>
            </main>
        );
    }
}

export default Detail;