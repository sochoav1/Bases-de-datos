// src/components/ClientDeletion.js
import React, { useState } from 'react';

const ClientDeletion = () => {
  const [clientId, setClientId] = useState('');
  const [message, setMessage] = useState('');

  const handleInputChange = (event) => {
    setClientId(event.target.value);
  };

  const handleDelete = () => {
    // Send a DELETE request to your Node.js API to delete the client by ID
    fetch(`/api/clients/${clientId}`, {
      method: 'DELETE',
    })
      .then((response) => response.json())
      .then((data) => {
        setMessage(data.message || data.error);
      })
      .catch((error) => console.error('Error:', error));
  };

  return (
    <div className="form-container" >
      <h2>Delete a Client</h2>
      <label>
        Client ID:
        <input type="text" value={clientId} onChange={handleInputChange} />
      </label>
      <button onClick={handleDelete}>Delete Client</button>
      <p>{message}</p>
    </div>
  );
};

export default ClientDeletion;