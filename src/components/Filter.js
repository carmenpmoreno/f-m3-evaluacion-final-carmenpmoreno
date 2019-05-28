import React from 'react';
import PropTypes from 'prop-types';
import './Filter.scss';

class Filter extends React.Component {
    render() {
        const {onInputChange, queryName, handleInputHouse, house} = this.props;
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
                    <legend>Look for your favorite house</legend>
                    <label htmlFor="house" className= "inputLabel">Filtro</label>
                    <input 
                        type="text"
                        id="house"
                        onChange = {handleInputHouse}
                        value = {house}
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