(function() {
  var lastScroll;

  lastScroll = 0;

  window.onload = function() {
    return window.onscroll = function() {
      var e, st;
      e = document.querySelector('.post-nav-bar');
      st = window.scrollY;
      if (st > lastScroll && st > 55) {
        if (!e.classList.contains('hide-panel')) {
          e.classList.add('hide-panel');
        }
        e.classList.remove('show-panel');
      } else {
        if (!e.classList.contains('show-panel')) {
          e.classList.add('show-panel');
        }
        e.classList.remove('hide-panel');
      }
      return lastScroll = st;
    };
  };

}).call(this);
