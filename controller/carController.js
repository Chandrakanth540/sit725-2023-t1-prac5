const carModel = require('../model/carModels.js');

async function getCars(req, res) {
  try {
    const cars = await carModel.getAllCars();

    res.json({
      statuscode: 200,
      data: cars,
      message: 'retrieved',
    });
  } catch (error) {
    res.status(500).send('Internal Server Error');
  }
}

async function submitCar(req, res) {
  try {
    const carData = req.body;

    await carModel.addCar(carData);
    res.send({ message: 'Car post successful' });
  } catch (error) {
    res.status(500).send('Internal Server Error');
  }
}

module.exports = { getCars, submitCar };