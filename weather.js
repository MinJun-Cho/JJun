var weather = document.querySelector(".js-weather");

var API_KEY = "d396cd07ed12d7259627eef5c719da62";
var COORDS = 'coords';

function getweather(lat, lng) {
    fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`
        )
        .then(function(response) {
            return response.json();
        })
        .then(function(json) {
            var temperature = Math.floor(json.main.temp);
            var place = json.name;
            weather.innerText = 
                                
                                 `오늘의 날씨는? ${temperature} °C 입니다.

                                 당신이 계신 장소는 ${place} 이시네요?  `;
        });
}

function saveCoords(coordsobj) {
    localStorage.setItem(COORDS, JSON.stringify(coordsobj));
}

function handleGeoSucces(position) {
     var latitude = position.coords.latitude;
     var longitude = position.coords.longitude;
     var coordsobj = {
         latitude,
         longitude
    };
    saveCoords(coordsobj);
    getweather(latitude, longitude);
}

function handleGeoError() {
     console.log("cant access geo location");
}

function asdkForCoords() {
    navigator.geolocation.getCurrentPosition(handleGeoSucces, handleGeoError)
}

function loadCoords() {
    var loadedCords = localStorage.getItem(COORDS);
    if (loadedCords === null) {
        asdkForCoords();
    } else {
        var parseCoords = JSON.parse(loadedCords);
        getweather(parseCoords.latitude, parseCoords.longitude);
    }
}

function init() {
    loadCoords();
}

init();