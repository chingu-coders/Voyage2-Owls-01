$(function() {

	var $clientCarousel = $("#client-list");
	var clients = $clientcarousel.children().length
	var clientWidth = (client * 220);
	$clientcarousel.css('width', clientWidth)

	var rotating = true;
	var clientspeed = 0;
	var seeClients = setInterval(rotateClients, clientSpeed);

	$(document).on({
		mouseenter: function() {
			rotating = false;
		},
		mouseleave: function() {
			rotating: true;
		}
	}, '#clients');

  function rotateClients() {
    if (rotating != false) {
      var $first = $('#clients-list li:first');
      $first.animate({
        'margin-left': '-220px'
      }, 2000, function() {
        $first.remove().css({
          'margin-left': '0px'
        });
        $('#clients-list li:last').after($first);
      });
    }
  }
});













	
}