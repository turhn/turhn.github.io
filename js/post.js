(function() {
  var lastScroll;

  lastScroll = 0;

  window.onload = function() {
    return window.onscroll = function() {
      var e, st;
      e = document.querySelector('.post-nav-bar');
      st = window.scrollY;
      if (st > lastScroll && st > 55) {
        e.style['display'] = 'none';
      } else {
        e.style['display'] = 'block';
      }
      return lastScroll = st;
    };
  };

}).call(this);
