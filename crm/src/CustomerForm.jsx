import React, { useState } from 'react';
import OpportunitiesForm from './OpportunitiesForm';

const CustomerForm = () => {
  const [isExistingCustomer, setIsExistingCustomer] = useState(false);
  const [Fname, setFName] = useState('');
  const [Lname, setLName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [company, setCompany] = useState('');
  const [isNewCompany, setIsNewCompany] = useState(false);
  const [newCompanyName, setNewCompanyName] = useState('');
  const [showOpportunitiesForm, setShowOpportunitiesForm] = useState(false);
  const [companyAddress, setCompanyAddress] = useState('');
  const [moneySpent, setMoneySpent] = useState('');
  const [industry, setIndustry] = useState('');
  const [companyPhone, setCompanyPhone] = useState('');
  const [companyEmail, setCompanyEmail] = useState('');

  const handleCustomerTypeChange = (event) => {
    setIsExistingCustomer(event.target.value === 'existing');
  };

  const handleFNameChange = (event) => {
    setFName(event.target.value);
  };

  const handleLNameChange = (event) => {
    setLName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
  };

  const handleCompanyChange = (event) => {
    const selectedCompany = event.target.value;

    if (selectedCompany === 'new') {
      setIsNewCompany(true);
    } else {
      setIsNewCompany(false);
      setCompany(selectedCompany);
    }
  };

  const handleNewCompanyNameChange = (event) => {
    setNewCompanyName(event.target.value);
  };

  const handleCompanyAddressChange = (event) => {
    setCompanyAddress(event.target.value);
};

const handleMoneySpentChange = (event) => {
    setMoneySpent(event.target.value);
};

const handleIndustryChange = (event) => {
    setIndustry(event.target.value);
};

const handleCompanyPhoneChange = (event) => {
    setCompanyPhone(event.target.value);
};

const handleCompanyEmailChange = (event) => {
    setCompanyEmail(event.target.value);
};


  const handleSubmit = (event) => {
    event.preventDefault();

    // Perform your logic here to handle the form submission based on the customer type and entered data
    if (isExistingCustomer) {
      // Logic for existing customer
    } else {
      // Logic for new customer
      if (isNewCompany) {
        // Handle the new company logic using the newCompanyName state
        console.log(`New Company Name: ${newCompanyName}`);
      } else {
        // Handle the existing company logic using the company state
        console.log(`Selected Company: ${company}`);
      }
    }

    // Reset the form fields
    setFName('');
    setLName('');
    setEmail('');
    setPhone('');
    setCompany('');
    setIsExistingCustomer(false);
    setIsNewCompany(false);
    setNewCompanyName('');
    setShowOpportunitiesForm(true);
    setCompanyAddress('');
    setMoneySpent('');
    setIndustry('');
    setCompanyPhone('');
    setCompanyEmail('');
  };

  const handleOpportunitiesSubmit = (opportunityData) => {
    // Perform your logic here to handle the Opportunities form submission
    console.log('Opportunities form submitted');
    console.log(opportunityData);

    // Reset the Opportunities form fields
    setShowOpportunitiesForm(false);
  };

  if (showOpportunitiesForm) {
    return <OpportunitiesForm onSubmit={handleOpportunitiesSubmit} />;
  }


  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          <input
            type="radio"
            value="new"
            checked={!isExistingCustomer}
            onChange={handleCustomerTypeChange}
          />
          New Customer
        </label>
        <label>
          <input
            type="radio"
            value="existing"
            checked={isExistingCustomer}
            onChange={handleCustomerTypeChange}
          />
          Existing Customer
        </label>
      </div>

      {!isExistingCustomer && (
        <div>
          <label>
            First Name:
            <input type="text" value={Fname} onChange={handleFNameChange} />
          </label>
          <label>
            Last Name:
            <input type="text" value={Lname} onChange={handleLNameChange} />
          </label>
          <label>
            Email:
            <input type="email" value={email} onChange={handleEmailChange} />
          </label>
          <label>
            Phone Number:
            <input type="integer" value={phone} maxLength={10} onChange={handlePhoneChange} />
          </label>
          <label>
            Company:
            <select value={company} onChange={handleCompanyChange}>
              <option value="">Select a company</option>
              <option value="company1">Company 1</option>
              <option value="company2">Company 2</option>
              <option value="company3">Company 3</option>
              <option value="new">New Company</option>
            </select>
          </label>
          {isNewCompany && (
            <div>
            <label>
              Company Name:
              <input
                type="text"
                value={newCompanyName}
                onChange={handleNewCompanyNameChange}
              />
            </label>
            <label>
              Company Address:
              <input
                type="text"
                value={companyAddress}
                onChange={handleCompanyAddressChange}
              />
            </label>
            <label>
              Money Spent, in Rupees:
              <input
                type="integer"
                value={moneySpent}
                onChange={handleMoneySpentChange}
              />
            </label>
            <label>
              Industry:
              <input
                type="text"
                value={industry}
                onChange={handleIndustryChange}
              />
            </label>
            <label>
              Company Phone:
              <input
                type="integer max length 10"
                value={companyPhone}
                onChange={handleCompanyPhoneChange}
              />
            </label>
            <label>
              Company Email:
              <input
                type="email"
                value={companyEmail}
                onChange={handleCompanyEmailChange}
              />
            </label>
            </div>
          )}
        </div>
      )}

      {isExistingCustomer && (
        <div>
        <label>
        Customer:
        <select value={company} onChange={handleCompanyChange}>
            <option value="">Select a Customer</option>
            <option value="eena">eena</option>
            <option value="meena">meena</option>
            <option value="deeka">deeka</option>
        </select>
        </label>
        </div>
       )}


      <button type="submit">Submit</button>
    </form>
  );
};

export default CustomerForm;

