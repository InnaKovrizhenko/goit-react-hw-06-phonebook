import { ContactForm } from './ContactForm/ContactForm'
import { Filter } from './Filter/Filter'
import { ContactList } from './ContactList/ContactList'
import { Titleh1, Titleh2, Phonebook } from './App.styled'
import { ToastContainer } from 'react-toastify';


export const App = () => {

return (
  <Phonebook>
  <Titleh1>Phonebook</Titleh1>
  <ContactForm />
  <Titleh2>Contacts</Titleh2>
  <Filter />
  <ContactList />
  <ToastContainer autoClose={2000} />
</Phonebook>)
}

