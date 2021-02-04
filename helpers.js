getCity = (city) => {
    if (!city) {
        city = "Budapest";
    }
    city = city.charAt(0).toUpperCase() + city.slice(1);
    return city;
}
module.exports.getCity = getCity;