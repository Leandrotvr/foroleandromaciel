const { Sequelize } = require('sequelize');

// Crea una instancia de Sequelize que se conecta a un archivo SQLite
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: 'database.sqlite' // El archivo donde se guardará la base de datos
});

module.exports = sequelize;