(function() {
  var headroom;

  document.addEventListener('DOMContentLoaded', _(function() {
    var headerElem;
    return headerElem = document.querySelector('header');
  }));

  headroom = new Headroom(headerElem);

  headroom.init();

}).call(this);
