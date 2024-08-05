const axios = require('axios');
const API_KEY = '9962478e8ea74f47a00175924240508';
const getWeather = async (req, res) => {
  try {
    const city = req.query.city;
    if (!city) {
      return res.status(400).send('City is required');
    }
    const response = await axios.get(`http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}`);
    res.json(response.data);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports = { getWeather };
