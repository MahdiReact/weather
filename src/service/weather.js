export class WeatherClass {
    constructor(city ){
        this.apiKey = '5865fa0f5d1420d7c4bd7efceb2ab7a9';
        this.city = city;
    }
    async getWeather() {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${this.apiKey}`);
        if(response.ok){
            const data = await response.json();
            return data;
        }else{
            throw Error(response.status)
        }
        
    }
}