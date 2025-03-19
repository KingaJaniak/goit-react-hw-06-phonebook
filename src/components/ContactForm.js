import React from 'react';
import { useDispatch } from 'react-redux';
import { addContact } from '../redux/contactsSlice';
import { nanoid } from 'nanoid';

const ContactForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const name = e.target.elements.name.value;
    const number = e.target.elements.number.value;

    const newContact = {
      id: nanoid(),
      name,
      number,
    };

    dispatch(addContact(newContact));
    e.target.reset();
  };

  return (
    <div className="form-container">
      <h2>Add Contact</h2>
      <form onSubmit={handleSubmit}>
        <input
          className="input-field"
          type="text"
          name="name"
          placeholder="Name"
          required
        />
        <input
          className="input-field"
          type="text"
          name="number"
          placeholder="Phone number"
          required
        />
        <button className="submit-button" type="submit">
          Add Contact
        </button>
      </form>
    </div>
  );
};
export default ContactForm;
