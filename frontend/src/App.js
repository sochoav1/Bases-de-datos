import React from 'react';
import './App.css';
import ClientForm from './components/ClientForm';
import ClientDeletion from './components/ClientDeletion';
import ClientRetrieval from './components/ClientRetrieval';
import EmployeeDeletion from './components/EmployeeDeletion';
import EmployeeForm from './components/EmployeeForm';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Client Management</h1>
        <ClientForm />
        <ClientDeletion />
        <ClientRetrieval />
        <EmployeeForm/>
        <EmployeeDeletion/>
      </header>
    </div>
  );
}

export default App;