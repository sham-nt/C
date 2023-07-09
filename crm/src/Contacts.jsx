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
    setTimeout(() => {
      const newContacts = [
        // Replace with your actual contacts data
        { customer_id: 1, first_name: 'John', last_name: 'Doe', email: 'john@example.com', company: 'Google', industry: 'Tech', status: 'Pending' },
        { customer_id: 1, first_name: 'John', last_name: 'Doe', email: 'john@example.com', company: 'Google', industry: 'Tech', status: 'Pending' },
        { customer_id: 2, first_name: 'Jane', last_name: 'Smith', email: 'jane@example.com', company: 'Apple', industry: 'Tech', status: 'Completed' },
        { customer_id: 3, first_name: 'Michael', last_name: 'Johnson', email: 'michael@example.com', company: 'Microsoft', industry: 'Tech', status: 'In Progress' },
        { customer_id: 4, first_name: 'Emily', last_name: 'Williams', email: 'emily@example.com', company: 'Amazon', industry: 'E-commerce', status: 'Pending' },
        { customer_id: 5, first_name: 'Daniel', last_name: 'Brown', email: 'daniel@example.com', company: 'Facebook', industry: 'Social Media', status: 'Completed' },
        { customer_id: 6, first_name: 'Olivia', last_name: 'Taylor', email: 'olivia@example.com', company: 'Netflix', industry: 'Entertainment', status: 'In Progress' },
        { customer_id: 7, first_name: 'William', last_name: 'Anderson', email: 'william@example.com', company: 'Tesla', industry: 'Automotive', status: 'Pending' },
        { customer_id: 8, first_name: 'Sophia', last_name: 'Martinez', email: 'sophia@example.com', company: 'IBM', industry: 'Tech', status: 'Completed' },
        { customer_id: 9, first_name: 'James', last_name: 'Hernandez', email: 'james@example.com', company: 'Salesforce', industry: 'Tech', status: 'In Progress' },
        { customer_id: 10, first_name: 'Ava', last_name: 'Lopez', email: 'ava@example.com', company: 'Uber', industry: 'Transportation', status: 'Pending' },
        { customer_id: 11, first_name: 'Benjamin', last_name: 'Gonzalez', email: 'benjamin@example.com', company: 'Airbnb', industry: 'Hospitality', status: 'Completed' },
        { customer_id: 12, first_name: 'Mia', last_name: 'Rodriguez', email: 'mia@example.com', company: 'Spotify', industry: 'Music', status: 'In Progress' },
        { customer_id: 13, first_name: 'Logan', last_name: 'Perez', email: 'logan@example.com', company: 'Adobe', industry: 'Tech', status: 'Pending' },
        { customer_id: 14, first_name: 'Charlotte', last_name: 'Turner', email: 'charlotte@example.com', company: 'Twitter', industry: 'Social Media', status: 'Completed' },
        { customer_id: 15, first_name: 'Elijah', last_name: 'Scott', email: 'elijah@example.com', company: 'Walmart', industry: 'Retail', status: 'In Progress' },
        { customer_id: 16, first_name: 'Amelia', last_name: 'Lee', email: 'amelia@example.com', company: 'Oracle', industry: 'Tech', status: 'Pending' },
        { customer_id: 17, first_name: 'Carter', last_name: 'Harris', email: 'carter@example.com', company: 'Alibaba', industry: 'E-commerce', status: 'Completed' },
        { customer_id: 18, first_name: 'Abigail', last_name: 'Clark', email: 'abigail@example.com', company: 'Sony', industry: 'Entertainment', status: 'In Progress' },
        { customer_id: 19, first_name: 'Henry', last_name: 'Lewis', email: 'henry@example.com', company: 'Ford', industry: 'Automotive', status: 'Pending' },
        { customer_id: 20, first_name: 'Ella', last_name: 'Young', email: 'ella@example.com', company: 'HP', industry: 'Tech', status: 'Completed' }
      
      ];

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
            <tr key={contact.customer_id}>
              <td>{contact.customer_id}</td>
              <td>{contact.first_name}</td>
              <td>{contact.last_name}</td>
              <td>{contact.email}</td>
              <td>{contact.company}</td>
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
