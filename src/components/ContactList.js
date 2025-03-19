import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeContact } from '../redux/contactsSlice';

const ContactList = () => {
  const contacts = useSelector(state => state.contacts || []);
  const dispatch = useDispatch();

  const handleRemove = id => {
    dispatch(removeContact(id));
  };

  return (
    <div className="list-container">
      {contacts.length > 0 ? (
        contacts.map(contact => (
          <div key={contact.id} className="contact-item">
            <span>
              {contact.name}: {contact.number}
            </span>
            <button
              className="remove-button"
              onClick={() => handleRemove(contact.id)}
            >
              Remove
            </button>
          </div>
        ))
      ) : (
        <p>No contacts available</p>
      )}
    </div>
  );
};

export default ContactList;
