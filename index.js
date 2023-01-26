const express = require('express');
const dotenv = require('dotenv');
const db = require('./src/db/database');
const users = require('./src/routes/usersRouter');
const app = express();
dotenv.config();
const port = process.env.PORT || 3030;

(async () => {
  try {
    await db.authenticate();
    await db.sync();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
})();

// Middlewares
app.use(express.json());
app.use('/users', users);

app.listen(port, () => {
  console.log('listening on port ' + port);
});
