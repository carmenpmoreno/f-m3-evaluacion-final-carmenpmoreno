import React from 'react';
import PropTypes from 'prop-types';
import './Filter.scss';

class Filter extends React.Component {
    render() {
        const {onInputChange} = this.props;
        return(
            <form>
                <label htmlFor="name" className= "inputLabel">Filtro</label>
                <input 
                    className="Namefilter" 
                    type="text"
                    id="name"
                    onChange = {onInputChange}
                     />
            </form>
        );
    }
}
Filter.propTypes = {
    onInputChange: PropTypes.func,
}

export default Filter;