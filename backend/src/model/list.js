const mongoose = require('mongoose');

const { Schema } = mongoose;

const listSchema = new Schema({
  helper: {
    type: String,
    required: true
  },
  driver: {
    type: String,
    required: true
  },
  departureTime: {
    type: String,
    required: true
  },
  day_of_the_week: {
    type: String,
    required: false
  },
  day: {
    type: Number,
    required: true,
  },
  month: {
    type: Number,
    required: true
  },
  year: {
    type: Number,
    required: true
  }
});


const List = mongoose.model('List', listSchema, 'schedules');

module.exports = {
  List,
  listSchema
}