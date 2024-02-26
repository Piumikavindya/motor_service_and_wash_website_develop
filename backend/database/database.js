const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/motor_services_and_wash_app') 
  .then(() => {
    console.log('DB is connected!');
  })
  .catch((ex) => {
    console.log('DB connection failed: ', ex);
  });

