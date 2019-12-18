const axios = require('axios');

const getClima = async(lat, lon) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lon }&appid=0326d984679d8a30cbd7fc3846e26b90`);

    return kelvinToCelsius(resp.data.main.temp);
}

const kelvinToCelsius = (temp) => temp - 273.15;

module.exports = {
    getClima
}