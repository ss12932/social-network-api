const express = require('express');
const morgan = require('morgan');
const connectToDatabase = require('./config/connection');
const routes = require('./routes');

const PORT = process.env.PORT || 3001;

const app = express();

app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

const init = async () => {
  try {
    await connectToDatabase();
    app.listen(PORT, () => {
      console.log(`Server listening on http://localhost:${PORT} 🚀`);
    });
  } catch (err) {
    console.log(`Failed to initiate server || ${err.message}`);
  }
};

init();
