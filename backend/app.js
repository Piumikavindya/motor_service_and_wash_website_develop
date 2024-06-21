const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config(); // Load environment variables

const app = express();

const PORT = process.env.PORT || 5555;
const mongoDBURL = process.env.MONGODB_URL;

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

// Import routes
const reservationRouter = require('./routes/reservation');
const userRouter = require('./routes/user');
const approvalRouter = require('./routes/approvalReservation');
const contactRouter = require('./routes/contactform');

// Sample route
app.get('/about', (req, res) => {
  res.send('<h1>Hello</h1>');
});

// Use routes
app.use('/reservation', reservationRouter);
app.use('/user', userRouter);
app.use('/approval', approvalRouter);
app.use('/contact', contactRouter);

// Connect to MongoDB and start the server
mongoose
  .connect(mongoDBURL)
  .then(() => {
    console.log('App connected to the database');
    app.listen(PORT, () => {
      console.log(`App is listening to port: ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
