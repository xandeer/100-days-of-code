$().ready(function() {
  require('bootstrap-loader');
  require('./sass/style.scss');

  var $navbar = $('#navbar');
  var $sections = $('main section');
  var $navLists = $('.navbar-nav li');

  var navbarH = $navbar.height();

  var followScroll = function() {
    var isUnder = function($elem) {
      // add 1 for some delays
      return window.scrollY + navbarH + 1 >= $elem.offset().top;
    };
    var setNavStyle = function($elem) {
      $navbar.css({
        backgroundImage: $elem.css('backgroundImage')
      });
    };

    $sections.each(function(index, elem) {
      var $elem = $(elem);
      if (isUnder($elem)) {
        setNavStyle($elem);

        $navLists.removeClass('active');
        $navLists.get(index).classList.add('active');
      }
    });
  };

  window.addEventListener('scroll', function() {
    followScroll();
  });

  $('.nav-item').click(function(e) {
    var $this = $(this);
    e.preventDefault();
    $('html, body').animate({
      scrollTop: $($this.attr('data-target')).offset().top -
        navbarH
    }, 500);
    $('.navbar-toggle').trigger('click');
  });

  followScroll();

});
