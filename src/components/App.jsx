import { useEffect, useState  } from "react";

import {ContactFormik} from "./ContactForm/ContactFormik";
import ContactList from "./ContactList/ContactList.js";
import Filter from "./Filter/Filter"
import GlobalStyle from "./GlobalStyle";
import { Layout } from "./Layout";

const contsctArray = [
  {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
  {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
  {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
  {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
];

const getInitialContacts = () => {
  const contacts = localStorage.getItem('contacts');
  if(contacts !== null) {
    const parsetContacts = JSON.parse(contacts);
    return parsetContacts;
  };
  return contsctArray;
};


export const App = () => {
  const [contacts, setContacts] = useState(getInitialContacts);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts))
  }, [contacts]);

  
  const isNameInContacts = (name) => {
    const normalizedName = name.toLowerCase();
    const contactsName = contacts.map(contact => contact.name.toLowerCase());
    return contactsName.includes(normalizedName)
  }

  const handlerSubmitForm = (newContact) => {
    if(isNameInContacts(newContact.name)) {
      return alert(`${newContact.name} is already in contacts`)
    }

    setContacts(prevState => [ newContact, ...prevState ]);
  }
  
  const getVisibleContacts = () => { 
    if(!filter) {
      return contacts;
    }
    const normalizedFilter = filter.toLowerCase();
    console.log(normalizedFilter)
    return contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter));
  }

  const onDeleteContact = contactId => {
    setContacts(prevState => prevState.filter(contact => contact.id !== contactId));
  }

  const visibleContacts = getVisibleContacts();

  const handlerFilterChanch = (e) => {
    setFilter(e.target.value)
  }
    return (
  
      <Layout> 
        <h1> PhoneBook </h1>
        <ContactFormik onSubmit={handlerSubmitForm} />
        <h2> Contacts </h2>
        <Filter 
          value={filter} 
          onChange={handlerFilterChanch} />
        <ContactList 
          contacts = {visibleContacts} 
          onDeleteContact = {onDeleteContact} />

        <GlobalStyle />
      </Layout>
    );
  };

