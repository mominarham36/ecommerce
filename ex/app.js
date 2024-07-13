const express = require('express');
const app = express();
const sequelize = require('./config/config'); // Import sequelize instance
const UserTable = require('./models/user'); // Import model to sync
const post = require('./models/post');

sequelize.sync({ alter: true }) // Sync models with database
  .then(() => {
    console.log('Database connected and synchronized successfully');
  })
  .catch((err) => {
    console.error('Error connecting to the database:', err);
  });

const userRouter = require('./router/user');
const postRouter = require('./router/post');

app.use(express.json());

app.use('/user', userRouter);
app.use('/post', postRouter);

app.listen(3911, () => {
  console.log(`Server is running on http://localhost:3911`);
});
