const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('ext_test', 'postgres', 'admin', {
  host: 'localhost',
  dialect: 'postgres',
  port: 5432,
  logging: false, // Enable logging for debugging
});

sequelize.authenticate()
  .then(() => {
    console.log('Database connected successfully');
  })
  .catch((err) => {
    console.error('Error connecting to the database:', err);
  });

module.exports = sequelize; // Export the sequelize instance
