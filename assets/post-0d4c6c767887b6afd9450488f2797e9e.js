(function() {
  document.addEventListener('DOMContentLoaded', function() {
    var headerElem, headroom;
    headerElem = document.querySelector('header');
    headroom = new Headroom(headerElem);
    return headroom.init();
  });

}).call(this);
