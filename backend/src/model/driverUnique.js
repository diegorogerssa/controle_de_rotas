const mongoose = require('mongoose');

const { Schema } = mongoose;

const driverUniqueSchema = new Schema({
  driver: {
    type: String,
    required: false
  }
});


const driverUnique = mongoose.model('driverUnique', driverUniqueSchema, 'driver_Unique');

module.exports = {
  driverUnique
}