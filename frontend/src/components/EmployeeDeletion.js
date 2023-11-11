// src/components/ClientDeletion.js
import React, { useState } from 'react';

const EmployeeDeletion = () => {
  const [employeeId, setEmployeeId] = useState('');
  const [message, setMessage] = useState('');

  const handleInputChange = (event) => {
    setEmployeeId(event.target.value);
  };

  const handleDelete = () => {
    // Send a DELETE request to your Node.js API to delete the client by ID
    fetch(`/api/clients/${employeeId}`, {
      method: 'DELETE',
    })
      .then((response) => response.json())
      .then((data) => {
        setMessage(data.message || data.error);
      })
      .catch((error) => console.error('Error:', error));
  };

  return (
    <div className="form-container">
      <h2>Delete a Employee</h2>
      <label>
        Employee ID:
        <input type="text" value={employeeId} onChange={handleInputChange} />
      </label>
      <button onClick={handleDelete}>Delete Employee</button>
      <p>{message}</p>
    </div>
  );
};

export default EmployeeDeletion;