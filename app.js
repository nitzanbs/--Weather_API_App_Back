const express = require('express');
const cors = require('cors'); 
const weatherRoutes = require('./routes/weatherRoutes');
const errorHandler = require('./middleware/errorHandler');

const app = express();
app.use(express.json());
app.use(cors()); 
app.use('/api', weatherRoutes);

app.use(errorHandler);

module.exports = app;
