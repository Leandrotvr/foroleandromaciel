const express = require('express');
const cors = require('cors'); // Importa la librería cors
require('dotenv').config();
const sequelize = require('./config/database');
const Post = require('./models/Post');

const app = express();

app.use(express.json());
app.use(cors()); // Usa el middleware de CORS

// Sincronizar la base de datos: crea las tablas si no existen
async function syncDatabase() {
    await sequelize.sync({ force: true }); // `force: true` borra y recrea las tablas
    console.log('Base de datos sincronizada');
}
syncDatabase();

// Rutas para los posts
const postsRouter = require('./routes/posts');
app.use('/api/posts', postsRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Servidor en el puerto ${PORT}`));
