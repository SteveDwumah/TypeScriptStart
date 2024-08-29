import WeatherType from "./weather-type";

function getWeather(): Promise<WeatherType> {
    return new Promise((resolve, reject) => {
        const randomNumber = Math.floor(Math.random() * 10)

        if(randomNumber >=0 && randomNumber <= 6){
            resolve(randomNumber as WeatherType)
        } else {
            reject("Weather forecast could not be determined")
        }
    })
}

getWeather().then((resp => {
    console.log(`Weather: ${WeatherType[resp]}`);
})).catch(error => {
    console.error(error)
})