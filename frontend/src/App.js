import React from 'react';
import './App.css';
import ClientDeletion from './components/ClientDeletion';
import ClientForm from './components/ClientForm';
import ClientRetrieval from './components/ClientRetrieval';
import EmployeeDeletion from './components/EmployeeDeletion';
import EmployeeForm from './components/EmployeeForm';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Client and Employee Management</h1>
        
        <div className="client-container">
          <h2>Clients</h2>
          <ClientForm />
          <ClientDeletion />
          <ClientRetrieval />
        </div>

        <div className="employee-container">
          <h2>Employees</h2>
          <EmployeeForm />
          <EmployeeDeletion />
        </div>
      </header>
    </div>
  );
}

export default App;

