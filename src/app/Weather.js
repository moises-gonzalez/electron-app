export class Weather {

    constructor(city, countryCode) {
        this.apikey = '56405ae7decef9b5c1bc1c389ebdc368';
        this.city = city;
        this.countryCode = countryCode;

    }

    async getWeather(){
        const URI = `https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.countryCode}&appid=${this.apikey}&units=metric`;
        const response = await fetch(URI);
        const data = await response.json();
        return data;
    }

    async changeLocation(city, countryCode){
        this.city = city;
        this.countryCode = countryCode;
    }

}