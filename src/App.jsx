import "./App.css";
import ContactForm from "./components/ContactForm/ContactForm";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactList from "./components/ContactList/ContactList";
import { useState, useEffect } from "react";

function App() {
  const [contactsData, setContactsData] = useState(() => {
    const savedData = JSON.parse(window.localStorage.getItem("contacts"));
    if (savedData?.length) {
      return savedData;
    }
    return [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ];
  });

  const [searchData, setSearchData] = useState("");
  const handleChange = (event) => {
    setSearchData(event.target.value);
  };

  const filteredContacts = contactsData.filter((contact) =>
    contact.name.toLowerCase().includes(searchData.toLowerCase())
  );

  useEffect(() => {
    window.localStorage.setItem("contacts", JSON.stringify(contactsData));
  }, [contactsData]);

  return (
    <>
      <div className="phonebook">
        <h1>Phonebook</h1>
        <ContactForm setContactsData={setContactsData} />
        <SearchBox
          setSearchData={setSearchData}
          searchData={searchData}
          handleChange={handleChange}
        />
        <ContactList
          filteredContacts={filteredContacts}
          setContactsData={setContactsData}
        />
      </div>
    </>
  );
}

export default App;
