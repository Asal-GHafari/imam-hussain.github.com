;(function($,undefined){
	var scrollorama = $.scrollorama({ blocks:'.pages' })

	$(window).bind('load',function(){setTimeout(function(){
			window.scrollTo(0,0)
			$(document.body).removeClass('preload')
	},1000)});

	scrollorama.onBlockChange(function() {
		var i = scrollorama.blockIndex
		$('.pages').removeClass('active').eq(i).addClass('active')
	});

	scrollorama.animate('.p1 .tx1',{
		property:'top',
		end:275,
		duration:250
	},{
		property:'opacity',
		end:0,
		duration:250
	})

	//.animate();

})(jQuery)
