
let httpRequest = new XMLHttpRequest();

function get(url, success, fail) {
    httpRequest.open('GET', url);
    httpRequest.onload=function () {
        if (httpRequest.status === 200) {
            successHandler(httpRequest.responseText);
        } else {
            fail(httpRequest.status);   
        }
    }
    httpRequest.send();
}

function tempToF(kelvin) {
    return ((kelvin - 273.15)*1.8 + 32).toFixed(0);
}


function failHandler(status) {
    console.log(status);
    const weatherDiv = document.querySelector('#weather');
    weatherDiv.innerHTML = status;
}


function successHandler(data) {
    const dataObj = JSON.parse(data);
    console.log(dataObj);
    const weatherDiv = document.querySelector('#weather');
    const weatherFragment = `
        <h1>Weather</h1>
        <h2 class="top">
        <img
            src="http://openweathermap.org/img/w/${dataObj.weather[0].icon}.png"
            alt="${dataObj.weather[0].description}"
            width="50"
            height="50"
        />${dataObj.name}
        </h2>
        <p>
        <span class="tempF">${tempToF(dataObj.main.temp)}</span> | ${dataObj.weather[0].description}
        </p>
    `
    weatherDiv.innerHTML = weatherFragment;
    //weatherDiv.classList.remove('hidden');
}

document.addEventListener('DOMContentLoaded', function () {
    const apiKey = 'd89b5a8b884a3b2e69309acf18f5360a';
    const url = 'http://127.0.0.1:8000/getData?city=m';
    get(url,successHandler,failHandler);
    //successHandler(httpRequest.responseText);
    
});

