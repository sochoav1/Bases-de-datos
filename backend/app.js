const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
const cors = require('cors');
app.use(cors());

// Create a connection to the MySQL database
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Halo$$343117J$',
  database: 'mydb',
});

db.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err);
    return;
  }
  console.log('Connected to the MySQL database');
});

// add a new client
app.post('/api/clients', (req, res) => {
  const { id, name, address, email, date } = req.body;

  const sql = 'INSERT INTO cliente (ID_cliente, Nombre, Direccion, Correo_electrico) VALUES (?, ?, ?, ?)';
  const values = [id, name, address, email];

  db.query(sql, values, (err, result) => {
    if (err) {
      console.error('Error inserting client:', err);
      res.status(500).json({ error: 'Error inserting client' });
    } else {
      res.json({ message: 'Client inserted successfully' });
    }
  });
});

// Delete a client by ID
app.delete('/api/clients/:id', (req, res) => {
  const clientId = req.params.id;

  const sql = 'DELETE FROM cliente WHERE ID_cliente = ?';
  const values = [clientId];

  db.query(sql, values, (err, result) => {
    if (err) {
      console.error('Error deleting client:', err);
      res.status(500).json({ error: 'Error deleting client' });
    } else {
      if (result.affectedRows > 0) {
        res.json({ message: 'Client deleted successfully' });
      } else {
        res.status(404).json({ error: 'Client not found' });
      }
    }
  });
});

// Retrieve a client by ID
app.get('/api/client-details/:id', (req, res) => {
  const clientId = req.params.id;

  const sql = 'SELECT * FROM cliente WHERE ID_cliente = ?';
  const values = [clientId];

  db.query(sql, values, (err, results) => {
    if (err) {
      console.error('Error retrieving client details:', err);
      res.status(500).json({ error: 'Error retrieving client details' });
    } else {
      if (results.length > 0) {
        const client = results[0]; // Assuming the ID is unique
        res.json(client);
      } else {
        res.status(404).json({ error: 'Client not found' });
      }
    }
  });
});

app.listen(5000, () => {
  console.log('Server is running on port 5000');
});
