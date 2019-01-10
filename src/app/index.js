// Javascript app index file
const {Weather} = require('./Weather');
const {UI} = require('./UI');
const {Store} = require('./Store');

const store = new Store();
const { city, countryCode } = store.getLocationData();
const ui = new UI();
const weather = new Weather(city, countryCode);

require('./index.css');

async function fecthWeather(){
    const data = await weather.getWeather();
    ui.render(data);
}

document.getElementById('w-change-btn').addEventListener('click', (e) => {
    const city = document.getElementById('city').value;
    const countryCode = document.getElementById('countryCode').value;
    weather.changeLocation(city, countryCode);
    store.setLocation(city, countryCode);
    fecthWeather();
    e.preventDefault();
});

document.addEventListener('DOMContentLoaded', fecthWeather)