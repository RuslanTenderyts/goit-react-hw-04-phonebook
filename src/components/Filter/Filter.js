import React from "react";
import PropTypes from "prop-types";
import {FilterLabel} from "./Filter.styled"


const Filter = ({value, onChange}) =>  (       

        <FilterLabel>
            <p>Find contacts by name</p>
            <input
                type="text"
                name="filter"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Find contacts by name"
                required
                value={value} 
                onChange={onChange}
            />
        </FilterLabel>
)

export default Filter;


PropTypes.Filter = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,  
}