require('../sass/style.scss');

$().ready(function() {
  // Generic function to make an AJAX call
  var fetchData = function(query, dataURL, headers) {
    // Return the $.ajax promise
    return $.ajax({
      data: query,
      dataType: 'json',
      url: dataURL,
      headers: headers
    });
  };

  // Make AJAX calls
  // 1. Get location
  // 2  Get weather
  var getLocation = fetchData({

    }, 'http://ipinfo.io/json'),
    getWeather = getLocation.then(function(data) {
      return fetchData({
        'lat': data.loc.split(',')[0],
        'lng': data.loc.split(',')[1]
      }, 'https://simple-weather.p.mashape.com/weatherdata', {
        'X-Mashape-Key': 'kZv5pogHZimshNygATAaaKsJ3Ykdp1hFMNyjsnJOqnoEsDXA5F'
      });
    });

  getLocation.done(function(data) {
    console.log(data.loc.split(',')[0]);
    console.log(data.loc.split(',')[1]);
  });

  getWeather.done(function(data) {
    console.log(data);
    render(data);
  });

  function c2f(c) {
    return Math.round(c * 1.8 + 32);
  }

  function f2c(f) {
    return Math.round((f - 32) / 1.8);
  }

  function render(data) {
    var $weatherContent = $('#weather-content');
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

    $weatherContent.html(html);

    $('#weather-toggle').click(function(e) {
      var $this = $(this);
      var $weatherTemp = $('#weather-temp');
      if ($this.hasClass('weather-celsius')) {

        $weatherTemp.html(c2f($weatherTemp.html()));
        $this.removeClass('weather-celsius');
        $this.html('F');
      } else {
        $weatherTemp.html(f2c($weatherTemp.html()));
        $this.addClass('weather-celsius');
        $this.html('C');
      }
    });
  }
});
