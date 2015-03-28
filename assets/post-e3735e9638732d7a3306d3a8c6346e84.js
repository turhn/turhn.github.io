(function() {
  var lastScroll, upward;

  lastScroll = 0;

  upward = 0;

  window.onload = function() {
    return window.onscroll = function() {
      var e, st;
      e = document.querySelector('.post-nav-bar');
      st = window.scrollY;
      if (st > lastScroll && st > 55) {
        upward = 0;
        if (!e.classList.contains('hide-panel')) {
          e.classList.add('hide-panel');
        }
        e.classList.remove('show-panel');
      } else {
        if (upward >= 20) {
          if (!e.classList.contains('show-panel')) {
            e.classList.add('show-panel');
          }
          e.classList.remove('hide-panel');
        }
        upward++;
      }
      return lastScroll = st;
    };
  };

}).call(this);
