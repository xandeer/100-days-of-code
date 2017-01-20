require('../sass/style.scss');

window.onload = function() {
  var weatherContent = document.getElementById('weather-content');

  function getPosition(success, error) {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(success,
        error);
    } else {
      alert(
        'It seems like Geolocation, which is required for this page, is not enabled in your browser.'
      );
    }
  }

  function c2f(c) {
    return Math.round(c * 1.8 + 32);
  }

  function f2c(f) {
    return Math.round((f - 32) / 1.8);
  }

  function render(data) {
    var channel = data.query.results.channel;
    var location = channel.description;
    var text = channel.item.condition.text;
    var imgUrl = channel.item.description.match(/http.*[.]gif/)[0];
    var temp = channel.item.condition.temp;
    if (channel.units.temperature == 'F') {
      temp = f2c(channel.item.condition.temp);
    }

    var html = '<div class="weather-location">' + location + '</div>' +
      '<div class="weather-condition"><span id="weather-temp">' + temp +
      '</span> °<a href="javascript: void(0);" id="weather-toggle" class="weather-celsius weather-unit">C</a></div>' +
      '<div class="weather-img"><img src="' + imgUrl + '"></div>' +
      '<div class="weather-text">' + text + '</div>';

    weatherContent.innerHTML = html;

    var weatherToggle = document.getElementById('weather-toggle');
    weatherToggle.addEventListener('click', function(e) {
      var weatherTemp = document.getElementById('weather-temp');
      if (this.classList.contains('weather-celsius')) {

        weatherTemp.innerHTML = c2f(weatherTemp.innerHTML);
        this.classList.remove('weather-celsius');
        this.innerHTML = 'F';
      } else {
        weatherTemp.innerHTML = f2c(weatherTemp.innerHTML);
        this.classList.add('weather-celsius');
        this.innerHTML = 'C';
      }
    });
  }

  function getDate(lat, long) {
    var request = new XMLHttpRequest();
    request.open('GET',
      'https://simple-weather.p.mashape.com/weatherdata?lat=' + lat +
      '&lng=' + long, true);
    request.setRequestHeader('X-Mashape-Key',
      'kZv5pogHZimshNygATAaaKsJ3Ykdp1hFMNyjsnJOqnoEsDXA5F');

    request.onload = function() {
      if (request.status >= 200 && request.status < 400) {
        // Success!
        var data = JSON.parse(request.responseText);
        render(data);
      } else {
        // We reached our target server, but it returned an error
      }
    };

    request.onerror = function() {
      // There was a connection error of some sort
    };

    request.send();
  }

  function successFunction(position) {
    var lat = position.coords.latitude;
    var long = position.coords.longitude;
    getDate(lat, long);
  }

  function errorFunction(position) {
    alert('Error!');
  }

  getPosition(successFunction, errorFunction);
};
