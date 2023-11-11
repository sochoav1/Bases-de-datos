// src/components/ClientRetrieval.js
import React, { useState } from 'react';

const ClientRetrieval = () => {
  const [clientId, setClientId] = useState('');
  const [clientInfo, setClientInfo] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (event) => {
    setClientId(event.target.value);
  };

  const handleRetrieve = () => {
    // Send a GET request to your Node.js API to retrieve client details by ID using the new URL
    fetch(`/api/client-details/${clientId}`)
      .then((response) => {
        if (response.status === 404) {
          setClientInfo(null);
          setErrorMessage('Client not found');
        } else if (response.ok) {
          return response.json();
        } else {
          throw new Error('Network response was not ok');
        }
      })
      .then((data) => {
        // Format the client data for display
        const formattedClientInfo = Object.entries(data)
          .map(([key, value]) => `${key}: ${value}`)
          .join(', ');
  
        setClientInfo(formattedClientInfo);
        setErrorMessage('');
      })
      .catch((error) => {
        setClientInfo(null);
        setErrorMessage('Error: ' + error.message);
        console.error('Error:', error);
      });
  };

  return (
    <div className="form-container">
      <h2>Retrieve Client Details by ID</h2>
      <label>
        Client ID:
        <input type="text" value={clientId} onChange={handleInputChange} />
      </label>
      <button onClick={handleRetrieve}>Retrieve Client</button>
      {clientInfo && (
        <div>
          <h3>Client Details</h3>
          <pre>{JSON.stringify(clientInfo, null, 2)}</pre>
        </div>
      )}
      {errorMessage && <p>{errorMessage}</p>}
    </div>
  );
};

export default ClientRetrieval;