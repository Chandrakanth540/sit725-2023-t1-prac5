const express = require('express');
const app = express();
const port = 3000;

const carRoutes = require('./routes/carRoutes.js');
const carController = require('./controller/carController.js');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use('/api/cars', carRoutes);

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});
app.post('/api/submit', carController.submitCar);
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});