import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import ContactForm from 'components/ContactForm';
import ContactList from './components/ContactList';
import Filter from './components/Filter';
import './index.css';

export const App = () => {
  return (
    <Provider store={store}>
      <ContactForm />
      <Filter />
      <ContactList />
    </Provider>
  );
};

export default App;
