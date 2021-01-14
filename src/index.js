import api from './api'

const weatherInput = document.querySelector("#inputWeather")
const weatherResultsContainer = document.querySelector("#weather-results")
const cacheTime = 100000
const cache = {}
let cacheTimer = 0

document.addEventListener("DOMContentLoaded", function(){
    weatherInput.addEventListener("change", getWeatherResults)
})

function getWeatherResults(event){
    console.log(event)
}