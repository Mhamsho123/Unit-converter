let convertBtn = document.getElementById("convert-btn")
let inputEl = document.getElementById("input-element")
let lengthEl = document.getElementById("length-element")
let volumeEl = document.getElementById("volume-element")
let massEl = document.getElementById("mass-element")
let errorEl = document.getElementById("error")


convertBtn.addEventListener("click", function () {
    let value = inputEl.value

    if (value === "" || isNaN(value)) {
        errorEl.textContent = `Error no number detected`
    } else {
        renderLength(inputEl.value)
        renderVolume(inputEl.value)
        renderMass(inputEl.value)
        inputEl.value = ""
        errorEl.textContent = ""
    }

})


function renderLength(value) {

    let convertedFeet = value * 3.281
    let convertedMeters = value / 3.281
    lengthEl.textContent = `${value} meters = ${convertedFeet.toFixed(3)} feet | ${value} feet = ${convertedMeters.toFixed(3)} meters `
}

function renderVolume(value) {

    let convertedGallon = value * 0.264
    let convertedLiter = value / 0.264
    volumeEl.textContent = `${value} liters = ${convertedGallon.toFixed(3)} gallons | ${value} gallons = ${convertedLiter.toFixed(3)} liters `
}

function renderMass(value) {

    let convertedPounds = value * 2.204
    let convertedKilos = value / 2.204
    massEl.textContent = `${value} kilos = ${convertedPounds.toFixed(3)} pounds | ${value} pounds = ${convertedKilos.toFixed(3)} kilos `
}