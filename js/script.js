;(function($,undefined){
	var scrollorama = $.scrollorama({ blocks:'.pages' })

	$(window).bind('load',function(){setTimeout(function(){
			window.scrollTo(0,0)

			$(document.body).removeClass('preload')

			scrollorama.onBlockChange(function() {
				var i = scrollorama.blockIndex
				$('.pages').removeClass('active').eq(i).addClass('active')
			});

	},1000)});
})(jQuery)
