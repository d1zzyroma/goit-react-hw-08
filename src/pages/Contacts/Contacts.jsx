import { useEffect } from "react";
import ContactForm from "../../components/ContactForm/ContactForm";
import ContactList from "../../components/ContactList/ContactList";
import SearchBox from "../../components/SearchBox/SearchBox";
import { useDispatch, useSelector } from "react-redux";
import { addContactThunk, deleteContactsThunk, fetchContacts } from "../../redux/contacts/operations.js";
import { setFilter } from "../../redux/contacts/contactsSlice";



const Contacts = () => {
    const contacts = useSelector((state) => state.contacts.items);
    const filter = useSelector((state) => state.contacts.filter);
    const isLoading = useSelector((state) => state.contacts.isLoading);
    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(fetchContacts());  
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
    return(
      <div >
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
    )
}


export default Contacts;



