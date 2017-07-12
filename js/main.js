// Roboto Font
var WebFontConfig = {
  google: { families: [ 'Roboto:400,300,500:latin' ] }
};
(function() {
  var wf = document.createElement('script');
  wf.src = 'https://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
  wf.type = 'text/javascript';
  wf.async = 'true';
  var s = document.getElementsByTagName('script')[0];
  s.parentNode.insertBefore(wf, s);
})();

var menuItems = ["menu1", "menu2", "menu3", "menu4"];
var contentItems = ["main", "landschaften", "attraktionen", "kontakt"];

// Automatically select menu items
window.onscroll = function() {
  var doc = document.documentElement;
  var windowScroll = (window.pageYOffset || doc.scrollTop)  - (doc.clientTop || 0);

  var max = 0;
  for(var i = 0; i < contentItems.length; i++) {
    var elementScroll = document.getElementById(contentItems[i]).offsetTop;
    if(windowScroll >= elementScroll - 20) {
      max = i;
    }
  }
  reset();
  select(max);
}

function reset() {
  for(var i = 0; i < menuItems.length; i++) {
    document.getElementById(menuItems[i]).classList.remove("pure-menu-selected");
  }
}

function select(index) {
  document.getElementById(menuItems[index]).classList.add("pure-menu-selected");
}
