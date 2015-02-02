$(document)
	.ready(function() {
		// Initialize document by fading in buttons
		$('.i-button').hide();
    	$('.i-button').fadeIn(800).css('display', 'inline-block');
	}
);

$('.i-button')
	.mouseenter(function() {
		// Populate label when hovering over a button.
		var className = $(this).attr('class').split(' ')[1]
		$('.detail-label').removeClass('default').addClass(className);
	})
	.mouseleave(function() {
		// Clear label when hovering ends.
		$('.detail-label').attr('class', 'detail-label');
	}
);

$('.menu-item')
	.click(function() {
		// When clicking a filter, clear buttons then fade in results.
		var tgtClass = $(this).attr('class').split(' ')[1];
		$('.i-button').hide();
		$('.i-button').fadeIn()
		$('.i-button:not(.'+tgtClass+')').hide();
	}
);

$('.name')
	.click(function() {
		// When clicking the name, clear buttons, then fade in all.
		$('.i-button').hide();
		$('.i-button').fadeIn();
	}
);
