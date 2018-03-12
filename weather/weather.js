const request = require('request');

const getWeather = (latitude,longitude,callback) => {

  request({
    url : `https://api.darksky.net/forecast/ea6a5178340efe95346f4775f1c783e0/${latitude},${longitude}`,
    json : true
  }, (error,response,body) => {
      if(!error && response.statusCode === 200){
        callback( undefined, { temperature : body.currently.temperature});
      } else {
        callback('Unable to fetch weather');
      }
  });
}


module.exports.getWeather = getWeather;
