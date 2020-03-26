function get(url) {
    return new Promise(function (resolve, reject) {
        let httpRequest = new XMLHttpRequest();
        httpRequest.open('GET', url);
        httpRequest.onload=function () {
            if (httpRequest.status === 200) {
                resolve(httpRequest.responseText);
            } else {
                reject(Error(httpRequest.status));
            }
        };

        httpRequest.onerror = function () {
            reject(Error('Network Error'));
        };

        httpRequest.send();
    })

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
    const weatherDiv = document.querySelector('#weather');
    const div = `
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
    return div
}


document.addEventListener('DOMContentLoaded', function () {
    const apiKey = 'd89b5a8b884a3b2e69309acf18f5360a';
    const weatherDiv = document.querySelector('#weather');
    const locations = [
      'Mumbai',
      'Delhi',
      'Kolkata',
      'Chennai'
    ]
    const urls = locations.map(function(location) {
      return `http://127.0.0.1:8000/getData?city=${location}`;
    })
    Promise.all([get(urls[0]),get(urls[1]),get(urls[2]),get(urls[3])])
      .then(function (responses) {
        return responses.map(function (response) {
          return successHandler(response);
        })
      })
      .then(function(literals){
        weatherDiv.innerHTML = `<h1>Weather</h1>${literals.join('')}`;
      })
      .catch(function (error) {
            failHandler(error);
      })
      .finally(function () {
          console.log("Enjoy!");

      });
});
