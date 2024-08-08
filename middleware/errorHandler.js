const errorHandler = (err, req, res, next) => {
    console.error(err.stack);

    if (err.response) {
        switch (err.response.status) {
            case 400:
                res.status(400).send('No matching city found. Please try another city.');
                break;
            case 404:
                res.status(404).send('No weather data available for the specified city.');
                break;
            case 503:
                res.status(503).send('Service Unavailable: Network error occurred while fetching weather data. Please try again later.');
                break;
            default:
                res.status(500).send('Internal Server Error: Something went wrong. Please try again later.');
        }
    } else if (err.message.includes('Network Error')) {
        res.status(503).send('Service Unavailable: Network error occurred while fetching weather data. Please try again later.');
    } else {
        res.status(500).send('Internal Server Error: Something went wrong. Please try again later.');
    }
};

module.exports = errorHandler;
