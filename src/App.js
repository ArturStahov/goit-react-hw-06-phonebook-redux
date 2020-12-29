import SectionBlock from './components/Section';
import PhoneForm from './components/PhoneForm';
import ContactsList from './components/ContactList';
import FilterContacts from './components/FilterContacts';

// сделать сохранение в локал сторадж через редакс
export default function App() {
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
