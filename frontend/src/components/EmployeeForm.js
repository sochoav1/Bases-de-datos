// src/components/ClientForm
import React, { useState } from 'react';

const EmployeeForm = () => {
  const [formData, setFormData] = useState({
    id: '',
    name: '',
    salary: '',
    hire_date: '',
    schedule: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Send a POST request to your Node.js API to insert the new client data
    fetch('/api/employee', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle the response from the API if needed
        console.log(data);
      })
      .catch((error) => console.error('Error:', error));
  };

  return (
    <div className="form-container">
      <h2>Add a New Employee</h2>
      <form onSubmit={handleSubmit}>
        <label>
          ID:
          <input type="text" name="id" value={formData.id} onChange={handleInputChange} />
        </label>
        <br />
        <label>
          Name:
          <input type="text" name="name" value={formData.name} onChange={handleInputChange} />
        </label>
        <br />
        <label>
          Salary:
          <input type="number" name="salary" value={formData.salary} onChange={handleInputChange} />
        </label>
        <br />
        <label>
          Hire date:
          <input type="text" name="hire_date" value={formData.hire_date} onChange={handleInputChange} />
        </label>
        <br />
        <label>
          Schedule:
          <input type="text" name="schedule" value={formData.schedule} onChange={handleInputChange} />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default EmployeeForm;