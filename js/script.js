var scrollorama = $.scrollorama({ blocks:'.pages' });

scrollorama.onBlockChange(function() {
	var i = scrollorama.blockIndex;
	$('.pages').removeClass('active').eq(i).addClass('active');
});