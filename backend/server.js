// backend/server.js
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Ruta para obtener la lista de clientes
app.get('/api/clients', (req, res) => {
    const clients = [
        { id: 1, usuario: 'User1', sitio: 'site1.com', gestorDB: 'MySQL', nombreDB: 'db1', usuarioDB: 'dbuser1', quota: '1GB' },
        { id: 2, usuario: 'User2', sitio: 'site2.com', gestorDB: 'PostgreSQL', nombreDB: 'db2', usuarioDB: 'dbuser2', quota: '500MB' }
    ];
    res.json(clients);
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});