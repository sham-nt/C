import React from 'react'

import {Routes, Route, useNavigate} from 'react-router-dom';

import CustomerButtons from './components/CustomerForm'
import Contacts from './components/Contacts'
import Dash from './components/Dashboard'


function App() {
    const navigate = useNavigate();

    const navigateToDashboard = () => {
        navigate('/');
    };

    const navigateToContacts = () => {
        navigate('/contacts');
    };

    const navigateToCustomerForm = () => {
        navigate('/customerForm');
    };

  return (
    <div>
        <div>
        <nav style={{ backgroundColor: '#333', padding: '10px', display: 'flex', justifyContent: 'flex-start' }}>
            <div style={{paddingRight: '20px'}}>
                <span style={{ color: '#fff', cursor: 'pointer', fontWeight: 'bold' }} onClick={navigateToDashboard}>
                Dashboard
                </span>
            </div>
            <div style={{ borderLeft: '1px solid #fff', paddingLeft: '15px' }}>
                <span style={{ color: '#fff', cursor: 'pointer', margin: '0 10px' }} onClick={navigateToCustomerForm}>
                Add New Entry
                </span>
                <span style={{ color: '#fff', cursor: 'pointer', margin: '0 10px' }} onClick={navigateToContacts}>
                Contacts
                </span>
            </div>
        </nav>
        </div>
        
        <Routes>
        <Route path="/contacts" element={<Contacts />
    } />
        <Route path="/customerForm" element={<CustomerButtons />} />
        <Route path="/" element={<Dash />} />
        </Routes>
    </div>
  );
}

export default App;