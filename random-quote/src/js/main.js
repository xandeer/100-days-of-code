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

$().ready(function() {

  var renderQuote = function renderQuote(data) {
    if (!data.hasOwnProperty('author') || data.author === '') {
      data.author = 'unknow';
    }
    $('.quote-content').html(data.quote);
    $('.quote-author').html('--' + data.author);

    $('.quote-twitter').attr('href', tweetPrefix +
      encodeURIComponent(data.quote + data.author));

    $('.hide').removeClass('hide');
  }

  function getRandomQuote(option) {
    $.ajax({
      type: 'POST',
      url: option.url,
      headers: option.headers,
      success: function(data) {
        var data = JSON.parse(data);
        renderQuote(data);
      }
    });
  }

  renderQuote(data);

  $('.quote-refresh').click(function(e) {
    e.preventDefault();
    getRandomQuote(config);
  });

  // getRandomQuote(config);
});
