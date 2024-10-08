import Contact from "/src/components/Contact/Contact.jsx";
import s from "./ContactList.module.css";

const ContactList = ({ filteredContacts, setContactsData }) => {
  const handleDeleteContact = (id) => {
    setContactsData((prev) => prev.filter((item) => item.id !== id));
  };
  return (
    <div className={s.form}>
      {filteredContacts.map((contact) => (
        <Contact
          key={contact.id}
          id={contact.id}
          name={contact.name}
          number={contact.number}
          handleDeleteContact={handleDeleteContact}
        ></Contact>
      ))}
    </div>
  );
};

export default ContactList;
