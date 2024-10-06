const mongoose = require('mongoose');

const { Schema } = mongoose;

const helperUniqueSchema = new Schema({
  helper: {
    type: String,
    required: false
  }
});


const helperUnique = mongoose.model('helperUnique', helperUniqueSchema, 'helper_Unique');

module.exports = {
  helperUnique
}