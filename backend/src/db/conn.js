const mongoose = require('mongoose');
require('dotenv').config();

async function main() {
  try {
    mongoose.set('strict', true);
    await mongoose.connect(process.env.DB)

    console.log('Connected to the database');
    
  } catch (error) {
    console.error('Error connecting to the database: ', error);
    
  }
}

module.exports = main;