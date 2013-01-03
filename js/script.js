;(function($,undefined){
	var scrollorama = $.scrollorama({ blocks:'.pages' })

	$(window).bind('load',function(){setTimeout(function(){
			window.scrollTo(0,0)
			$(document.body).removeClass('preload')
	},1)});

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
		start:1,
		end:0,
		duration:250
	})

	.animate('.p2 .tx1',{
		property:'margin-top',
		start:100,
		end:200,
		duration:200,
		pin:true
	},{
		property:'opacity',
		start:0,
		end:1,
		duration:200
	})

	.animate('.p2 .tx2',{
		property:'margin-top',
		start:10,
		end:40,
		duration:150,
		delay:300,
		pin:true
	},{
		property:'opacity',
		start:0,
		end:1,
		duration:150,
		delay:300
	})

	.animate('.p2 .tx1',{
		property:'margin-top',
		start:200,
		end:210,
		duration:200,
		delay:450,
		pin:true
	})

	
	


})(jQuery)
