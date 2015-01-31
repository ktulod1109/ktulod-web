$(document).ready(function() {
	$('.i-button').hide();
    $('.i-button').fadeIn(800).css('display', 'inline-block');
});

$('.i-button').mouseenter(function() {
	var className = $(this).attr('class').split(' ')[1]
	$('.detail-label').removeClass('default').addClass(className);
})

$('.i-button').mouseleave(function() {
	$('.detail-label').attr('class', 'detail-label');
});

$('.menu-item').click(function() {
	var tgtClass = $(this).attr('class').split(' ')[1];
	$('.i-button').hide();
	$('.i-button').fadeIn()
	$('.i-button:not(.'+tgtClass+')').hide();
});

$('.name').click(function() {
	$('.i-button').hide();
	$('.i-button').fadeIn();
});
