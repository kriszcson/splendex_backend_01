const express = require('express');
const request = require('request');

const helpers = require('../helpers');

const router = express.Router();
let data;


const constants = require('../config');

router.get('/city/:city?', (req, res) => {
    let city = helpers.getCity(req.params.city);
    let getCityURL = `${constants.openWeatherMap.BASE_URL}q=${city}&${constants.openWeatherMap.METRIC_VALUES}&appid=${constants.openWeatherMap.SECRET_KEY}`;
    request(getCityURL, (err, res, body) => {
        data = JSON.parse(body);
    })
    res.json(data);
})


router.get('/zip-code/:zipcode?', (req, res) => {
    let zipCode = req.params.zipcode;
    if (!zipCode) {
        zipCode = 7621;
    }
    let getCityURL = `${constants.openWeatherMap.BASE_URL}zip=${zipCode},hu&${constants.openWeatherMap.METRIC_VALUES}&appid=${constants.openWeatherMap.SECRET_KEY}`;
    request(getCityURL, (err, res, body) => {
        data = JSON.parse(body);
    })
    res.json(data);
})



router.get('/coordinates/:lat?/:lon?', (req, res) => {
    let latitude = req.params.lat;
    let longitude = req.params.lon;
    if (!latitude || !longitude) {
        latitude = 46.069333056;
        longitude = 18.226499094;
    }
    let getCoordinatesURL = `${constants.openWeatherMap.BASE_URL}lat=${latitude}&lon=${longitude}&${constants.openWeatherMap.METRIC_VALUES}&appid=${constants.openWeatherMap.SECRET_KEY}`;
    request(getCoordinatesURL, (err, res, body) => {
        data = JSON.parse(body);
    })
    res.json(data);
})

module.exports = router;