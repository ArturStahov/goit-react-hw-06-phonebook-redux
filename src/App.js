import SectionBlock from './components/Section/Section';
import PhoneForm from './components/PhoneForm/PhoneForm';
import ContactsList from './components/ContactList/ContactList';
import FilterContacts from './components/FilterContacts/FilterContacts';

// сделать сохранение в локал сторадж через редакс
export default function App() {
  // useEffect(() => {
  //   if (localStorage.getItem('saveContacts')) {
  //     const arrLoadContacts = JSON.parse(localStorage.getItem('saveContacts'));
  //     setContacts(arrLoadContacts);
  //   }
  // }, []);

  // useEffect(() => {
  //   localStorage.setItem('saveContacts', JSON.stringify(contacts));
  // }, [contacts]);

  return (
    <>
      <SectionBlock title="Phone-book">
        <PhoneForm />
      </SectionBlock>
      <SectionBlock title="Contacts">
        <FilterContacts />

        <ContactsList />
      </SectionBlock>
    </>
  );
}
