/*
1 meter = 3.281 feet
1 feet = 0.3048 meter
1 liter = 0.264 gallon
1 gallon = 3.78541 liter
1 kilogram = 2.204 pound
1 pound = 0.453592 kgs
*/

//Variables

let metric = document.getElementById("metric")
let btn = document.getElementById("btn")
let meterFeet = document.getElementById("meter-feet")
let literGallon = document.getElementById("liter-gallon")
let kiloPound = document.getElementById("kilo-pound")


//Conversion functions
let MF = btn.addEventListener("click", function() {
    meterFeet.textContent = `${metric.value} meters = ${(metric.value * 3.281).toFixed(3)} feet | ${metric.value} feet = ${(metric.value * 0.3048).toFixed(3)} meters`    
})

let LG = btn.addEventListener("click", function() {
    literGallon.textContent = `${metric.value} liters = ${(metric.value * 0.264).toFixed(3)} gallons | ${metric.value} gallons = ${(metric.value * 3.78541).toFixed(3)} liters`
})

let KP = btn.addEventListener("click", function() {
    kiloPound.textContent = `${metric.value} kilos = ${(metric.value * 2.204).toFixed(3)} pounds | ${metric.value} pounds = ${(metric.value * 0.453592).toFixed(3)} kilos`
})