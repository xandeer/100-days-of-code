require('../sass/style.scss');

$().ready(function() {
  // Generic function to make an AJAX call
  var fetchData = function(query, dataURL, headers) {
    // Return the $.ajax promise
    return $.ajax({
      data: query,
      dataType: 'jsonp',
      url: dataURL,
      headers: headers
    });
  };

  var searchWiki = function(sr) {
    return fetchData({
      format: 'json',
      action: 'query',
      generator: 'search',
      prop: 'extracts',
      explaintext: '',
      exintro: '',
      exsentences: 1,
      exlimit: 'max',
      gsrsearch: sr
    }, "https://en.wikipedia.org/w/api.php");
  };

  function addLink(data) {
    var $link = $('<a></a>');
    var prePath = 'https://en.wikipedia.org/?curid=';
    var $title = $('<div></div>').addClass('wiki-title').html(data.title);
    var $desc = $('<div></div>').addClass('wiki-desc').html(data.extract);
    $link.addClass('wiki-link')
      .attr('target', '_blank')
      .attr('href', prePath + data.pageid)
      .append($title)
      .append($desc);

    return $link;
  }

  var $results = $('#results');
  var $home = $('#home');
  var $input = $('input');
  var $close = $('.eks');

  $close.click(function(e) {
    $input.val('');
    $results.addClass('hide');
    $home.addClass('full-height');
  });

  $input.on('keyup', function(e) {
    var $this = $(this);
    if (e.keyCode == 13) {
      var query = $this.val();

      if (query != '') {
        searchWiki($this.val()).done(function(data) {
          var pages = data.query.pages;

          $results.empty();

          for (let key in pages) {
            if (pages.hasOwnProperty(key)) {
              $results.append(addLink(pages[key]));
            }
          }

          $results.removeClass('hide');
          $home.removeClass('full-height');
        });
      }
    }
  });
});
