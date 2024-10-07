// const { FindCursor } = require('mongodb');
const { List: ListModel } = require('../../model/list.js');
const toUpperCaseObject = require('../../utils/toUpperCase.js');


const listController = {

  //todo: create list
  create: async (req, res) => { 
    try {
      const entries = req.body


      const entriesFormatted = entries.map((entry) => {

        const hours = entry.departureTime.split("H")[0];
        const minutes = entry.departureTime.split("H")[1];

        const date = new Date(entry.year, entry.month - 1, entry.day, hours - 3, minutes);


        const dayOfWeek = date.getUTCDay();

        // Mapear o dia da semana para uma string
        const daysOfWeek = ['DOMINGO', 'SEGUNDA', 'TERÇA', 'QUARTA', 'QUINTA', 'SEXTA', 'SÁBADO'];
        const dayOfWeekString = daysOfWeek[dayOfWeek];

        return {
          helper: entry.helper.toUpperCase(),
          driver: entry.driver.toUpperCase(),
          departureTime: entry.departureTime.toUpperCase(),
          day_of_the_week: dayOfWeekString,
          day: entry.day,
          month: entry.month,
          year: entry.year,
        }
      })

      const savedLists = await ListModel.insertMany(entriesFormatted);
      res.status(201).json({ message: 'List created' });
    } catch (error) {
      res.status(500).send(error.message);
    }
  },

  //todo: delete list
  delete: async (req, res) => {
    const { id } = req.params;

    try {
      await ListModel.deleteOne({ _id: id });
      res.status(200).send({ message: 'List deleted' });
    } catch (error) {
      res.status(500).send(error.message);
    }
  },

  //todo: find list
  find: async (req, res) => {
    try {
      const { helper, day, month, year, departureTime, day_of_the_week, driver } = req.query;
      let query = {};

      if (helper) {
        query.helper = helper.toUpperCase();
      }

      if (day) {
        query.day = `${day}`;
      }

      if (month) {
        query.month = month;
      }

      if (year) {
        query.year = year;
      }

      if (departureTime) {
        query.departureTime = departureTime.toUpperCase();
      }

      if (day_of_the_week) {
        query.day_of_the_week = day_of_the_week.toUpperCase();
      }

      if (driver) {
        query.driver = driver.toUpperCase();
      }

      const lists = await ListModel.find(query).sort({ month: 1 });
      res.status(200).json(lists);
    } catch (error) {
      res.status(500).send(error.message);
    }
  },

  //todo: update list
  update: async (req, res) => {
    try {
      const { id } = req.params;
      const updateData = req.body;
      const newList = toUpperCaseObject(updateData);
      

      const updatedList = await ListModel.findByIdAndUpdate(id, newList, { new: true });

      if (!updatedList) {
        return res.status(404).send('Lista não encontrada');
      }

      res.status(200).json({ message: 'List updated' });
    } catch (error) {
      res.status(500).send(error.message);
    }
  }
};


module.exports = listController;