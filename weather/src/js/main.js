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

  function render(data) {
    var channel = data.query.results.channel;
    var location = channel.description;
    var condition = channel.item.condition.temp + ' °' + channel.units.temperature;
    var text = channel.item.condition.text;
    var imgUrl = channel.item.description.match(/http.*[.]gif/)[0];

    var html = '<div class="weather-location">' + location + '</div>' +
      '<div class="weather-condition">' + condition + '</div>' +
      '<div class="weather-img"><img src="' + imgUrl + '"></div>' +
      '<div class="weather-text">' + text + '</div>';

    weatherContent.innerHTML = html;
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
