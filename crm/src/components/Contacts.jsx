import React, { useState, useEffect } from 'react';

const Contacts = () => {
  const [contacts, setContacts] = useState([]); // State to hold contacts data
  const [displayedContacts, setDisplayedContacts] = useState([]); // State to hold displayed contacts

  // Function to load more contacts
  const loadMoreContacts = () => {
    const nextContacts = contacts.slice(
      displayedContacts.length,
      displayedContacts.length + 10
    );
    setDisplayedContacts(prevContacts => [...prevContacts, ...nextContacts]);
  };

  // Function to simulate fetching contacts from an API
  const fetchContacts = () => {
    // Simulating an API call delay
    setTimeout(async () => {
        const raw = await fetch('http://localhost:3000/contents').then(res => res.json());
        const newContacts = raw.contents;
        console.log(newContacts);

      setContacts(newContacts);
      setDisplayedContacts(newContacts.slice(0, 10));
    }); // Simulated delay of 1 second
  };

  // Load initial contacts when component mounts
  useEffect(() => {
    fetchContacts();
  }, []);

  return (
    <div>
      <h1>Contacts</h1>
      <table>
        <thead>
          <tr>
            <th>Customer ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Company</th>
            <th>Industry</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {displayedContacts.map(contact => (
            <tr key={contact.cid}>
              <td>{contact.cid}</td>
              <td>{contact.fname}</td>
              <td>{contact.lname}</td>
              <td>{contact.email}</td>
              <td>{contact.name}</td>
              <td>{contact.industry}</td>
              <td>{contact.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={loadMoreContacts}>Load More</button>
    </div>
  );
};

export default Contacts;