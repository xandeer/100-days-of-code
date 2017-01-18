require('../sass/style.scss');

const config = {
  url: 'https://andruxnet-random-famous-quotes.p.mashape.com/?cat=famous',
  headers: {
    'X-Mashape-Key': '8uQEqlngqRmshP3ghaWRQkELsLw9p11snxpjsnKKKn9KC7Guri',
    'Content-Type': 'application/x-www-form-urlencoded',
    'Accept': 'application/json'
  }
};

const data = {
  quote: 'Each problem that I solved became a rule which served afterwards' +
    ' to solve other problems.',
  author: 'Rene Descartes'
};

const tweetPrefix =
  'https://twitter.com/intent/tweet?hashtags=quotes&text=';

const colors = ['#16a085', '#27ae60', '#2c3e50', '#f39c12', '#e74c3c',
  '#9b59b6', '#FB6964', '#342224', "#472E32", "#BDBB99", "#77B1A9", "#73A857"
];

$().ready(function() {

  var getRandomColor = function(colors) {
    var rand = Math.floor(Math.random() * colors.length);
    return colors[rand];
  };

  var renderQuote = function(data) {
    if (!data.hasOwnProperty('author') || data.author === '') {
      data.author = 'unknow';
    }
    $('.quote-content').html(data.quote);
    $('.quote-author').html('--' + data.author);

    $('.quote-twitter').attr('href', tweetPrefix +
      encodeURIComponent(data.quote + data.author));

    $('.hide').removeClass('hide');
  }

  var render = function(data) {
    var color = getRandomColor(colors);

    $('.quote-content, .quote-author').animate({
      opacity: 0
    }, 500, function() {
      $(this).animate({
        opacity: 1
      }, 500);

      $('body').css({
        'color': color,
        'backgroundColor': color
      });
      $('.btn').css('backgroundColor', color);

      renderQuote(data);
    });
  };

  var getRandomQuote = function(option) {
    $.ajax({
      type: 'POST',
      url: option.url,
      headers: option.headers,
      success: function(data) {
        var data = JSON.parse(data);
        render(data);
      }
    });
  };

  render(data);

  $('.quote-refresh').click(function(e) {
    e.preventDefault();
    getRandomQuote(config);
  });

  // getRandomQuote(config);
});
