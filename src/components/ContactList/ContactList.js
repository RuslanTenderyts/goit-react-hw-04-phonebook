import React from "react";
import PropTypes from "prop-types";
import { Item, SpanNumber } from "./ContactList.styled";




const ContactList = ({contacts, onDeleteContact}) => (
    <ul>
        {contacts.map(({ id, name, number }) => (
            <Item key={id}>
                <span> { name } : </span>
                <SpanNumber> { number } </SpanNumber> 
                <button onClick={() => onDeleteContact(id)}>Delete</button>
            </Item>
        ))}
    </ul>
);

export default ContactList;

PropTypes.ContactList = {
    contacts: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            number: PropTypes.string.isRequired,
        })
    ),
    onDeleteContact: PropTypes.func.isRequired,
}