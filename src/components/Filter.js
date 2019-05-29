import React from 'react';
import PropTypes from 'prop-types';
import './Filter.scss';

class Filter extends React.Component {
    render() {
        const {onInputChange, queryName, onRadioClick, houseValue} = this.props;
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
                                checked = {houseValue.includes('gryffindor')}
                                />
                        <label>Slytherin</label>
                            <input
                                id="slytherin"
                                type="radio"
                                value="slytherin"
                                name="houses"
                                onClick = {onRadioClick}
                                checked = {houseValue.includes('slytherin')}
                                />
                        <label>Hufflepuff</label>
                            <input
                                id="hufflepuff"
                                type="radio"
                                value="hufflepuff"
                                name="houses"
                                onClick = {onRadioClick}
                                checked = {houseValue.includes('hufflepuff')}
                                />
                        <label>Ravenclaw</label>
                            <input
                                id="ravenclaw"
                                type="radio"
                                value="ravenclaw"
                                name="houses"
                                onClick = {onRadioClick}
                                checked = {houseValue.includes('ravenclaw')}
                                />
                         <label>None</label>
                            <input
                                id="none"
                                type="radio"
                                value="none"
                                name="houses"
                                onClick = {onRadioClick}
                                checked = {houseValue.includes('none')}
                                />
                         <label>All</label>
                            <input
                                id="all"
                                type="radio"
                                value="all"
                                name="houses"
                                onClick = {onRadioClick}
                                checked = {houseValue.includes('all')}
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