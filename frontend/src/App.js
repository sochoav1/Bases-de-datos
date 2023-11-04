import React from 'react';
import './App.css';
import ClientForm from './components/ClientForm';
import ClientDeletion from './components/ClientDeletion';
import ClientRetrieval from './components/ClientRetrieval';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Client Management</h1>
        <ClientForm />
        <ClientDeletion />
        <ClientRetrieval />
      </header>
    </div>
  );
}

export default App;