import React, { useState } from 'react';

const OpportunitiesForm = ({ onSubmit }) => {
  const [leadSource, setLeadSource] = useState('');
  const [expectedRevenue, setExpectedRevenue] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    // Perform your logic here to handle the Opportunities form submission
    onSubmit({
      leadSource,
      expectedRevenue,
      status
    });

    // Reset the Opportunities form fields
    setLeadSource('');
    setExpectedRevenue('');
    setStatus('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Lead Source:
          <input
            type="text"
            value={leadSource}
            onChange={(event) => setLeadSource(event.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Expected Revenue:
          <input
            type="text"
            value={expectedRevenue}
            onChange={(event) => setExpectedRevenue(event.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Status:
          <select value={status} onChange={(event) => setStatus(event.target.value)}>
            <option value="">Select a status</option>
            <option value="pending">Pending</option>
            <option value="in-progress">In Progress</option>
            <option value="completed">Completed</option>
          </select>
        </label>
      </div>
      <button type="submit">Submit Opportunities</button>
    </form>
  );
};

export default OpportunitiesForm;
