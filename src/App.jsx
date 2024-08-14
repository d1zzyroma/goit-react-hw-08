import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactForm from "./components/ContactForm/ContactForm";
import css from "./App.module.css";

import { addContactThunk, deleteContactsThunk, fetchContacts } from './redux/contactsOps';
import { setFilter } from './redux/contactsSlice';

function App() {
  const contacts = useSelector((state) => state.contacts.items);
  const filter = useSelector((state) => state.contacts.filter);
  const isLoading = useSelector((state) => state.contacts.isLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());  // Використання правильного імені операції
  }, [dispatch]);

  const handleAddContact = (newContact) => {
    dispatch(addContactThunk(newContact));
  };

  const handleDeleteContact = (id) => {
    dispatch(deleteContactsThunk(id));
  };

  const handleSetFilter = (value) => {
    dispatch(setFilter(value));
  };

  const filteredValues = () => {
    return contacts.filter(contact => 
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  return (
    <div className={css.container}>
      <h1>Phonebook</h1>
      {isLoading && <h1>LOADING......</h1>}
      <ContactForm addContact={handleAddContact} />
      <SearchBox 
        inputValue={filter} 
        setInputValue={handleSetFilter} 
      />
      <ContactList 
        contactData={filteredValues()} 
        deleteContact={handleDeleteContact} 
      />
    </div>
  );
}

export default App;
