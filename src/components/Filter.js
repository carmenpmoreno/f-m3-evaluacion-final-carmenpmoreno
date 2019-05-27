import React from 'react';
import PropTypes from 'prop-types';
import './Filter.scss';

class Filter extends React.Component {
    render() {
        const {onInputChange, queryName, onRadioClick} = this.props;
        return(
            <form>
                <fieldset>
                    <legend>Look for your favorite character</legend>
                    <label htmlFor="name" className= "inputLabel">Filtro</label>
                    <input 
                        className="Namefilter" 
                        type="text"
                        id="name"
                        onChange = {onInputChange}
                        value = {queryName}
                    />
                </fieldset>
                <fieldset>
                    <legend>Choose a house</legend>
                        <label>Gryffindor</label>
                            <input
                                id="Griffindor"
                                type="radio"
                                value="Gryffindor"
                                name="houses"
                                onClick = {onRadioClick}
                                />
                        <label>Slytherin</label>
                            <input
                                id="Slytherin"
                                type="radio"
                                value="Slytherin"
                                name="houses"
                                onClick = {onRadioClick}
                                />
                        <label>Hufflepuff</label>
                            <input
                                id="Hufflepuff"
                                type="radio"
                                value="Hufflepuff"
                                name="houses"
                                onClick = {onRadioClick}
                                />
                        <label>Ravenclaw</label>
                            <input
                                id="Ravenclaw"
                                type="radio"
                                value="Ravenclaw"
                                name="houses"
                                onClick = {onRadioClick}
                                />
                </fieldset>
                

            </form>
        );
    }
}
Filter.propTypes = {
    onInputChange: PropTypes.func.isRequired,
}

export default Filter;