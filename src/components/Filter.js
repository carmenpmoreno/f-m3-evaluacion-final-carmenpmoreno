import React from 'react';
import PropTypes from 'prop-types';
import './Filter.scss';

class Filter extends React.Component {
    render() {
        const {onInputChange, queryName, onRadioClick} = this.props;
        return(
            <form>
                <fieldset>
                    <legend>¡Let's look for your favorite character!</legend>
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
                    <legend>Select your favourite house</legend>
                        <label>Gryffindor</label>
                            <input
                                id="griffindor"
                                type="radio"
                                value="gryffindor"
                                name="houses"
                                onClick = {onRadioClick}
                                />
                        <label>Slytherin</label>
                            <input
                                id="slytherin"
                                type="radio"
                                value="slytherin"
                                name="houses"
                                onClick = {onRadioClick}
                                />
                        <label>Hufflepuff</label>
                            <input
                                id="hufflepuff"
                                type="radio"
                                value="hufflepuff"
                                name="houses"
                                onClick = {onRadioClick}
                                />
                        <label>Ravenclaw</label>
                            <input
                                id="ravenclaw"
                                type="radio"
                                value="ravenclaw"
                                name="houses"
                                onClick = {onRadioClick}
                                />
                         <label>None</label>
                            <input
                                id="none"
                                type="radio"
                                value="none"
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