;(function($,undefined){
	var pages = $('.pages'),
		bookimg = $('.bookimg'),
		scrollorama = $.scrollorama({ blocks:pages })

	$(window).bind('load',function(){setTimeout(function(){
			window.scrollTo(0,0)
			$(document.body).removeClass('preload')
	},1)});

	scrollorama.onBlockChange(function() {
		var i = scrollorama.blockIndex
		pages.removeClass('active').eq(i).addClass('active')
		bookimg.css('display', i<3 || i>10?'none':'block')
	});

	// p1

	scrollorama.animate('.p1 .tx1',{
		property:'opacity',
		start:1,
		end:0,
		duration:200
	})

	// p2

	var dly = 300

	scrollorama.animate('.p2 .tx1',{
		property:'margin-top',
		start:0,
		end:380,
		duration:500,
		delay: dly
	})

	$('.p2 h1').each(function(){
		scrollorama.animate($(this),{
			property:'opacity',
			start:0,
			end:1,
			duration:150,
			delay:dly
		})
		dly += 150
	})

	scrollorama.animate('.p2 .group',{
		property:'opacity',
		start:1,
		end:0,
		duration:250,
		delay:dly+50
	})


	// p3

	dly = 300

	scrollorama.animate('.p3 .tx1',{
		property:'margin-top',
		start:0,
		end:300,
		duration:500,
		delay: dly
	})

	$('.p3 h1').each(function(){
		scrollorama.animate($(this),{
			property:'opacity',
			start:0,
			end:1,
			duration:150,
			delay:dly
		})
		dly += 150
	})

	scrollorama.animate('.p3 .group',{
		property:'opacity',
		start:1,
		end:0,
		duration:250,
		delay:dly+50
	})

	// p4

	dly = 200

	scrollorama.animate('.p4 .tx1',{
		property:'margin-top',
		start:0,
		end:300,
		duration:500,
		delay: dly
	})

	$('.p4 h1, .p4 h2, .p4 h3').each(function(){
		scrollorama.animate($(this),{
			property:'opacity',
			start:0,
			end:1,
			duration:150,
			delay:dly
		})
		dly += 150
	})

	scrollorama.animate('.p4 .group',{
		property:'opacity',
		start:1,
		end:0,
		duration:250,
		delay:dly+50
	})

	// p5

	scrollorama.animate(bookimg,{
		property:'opacity',
		start:0,
		end:1,
		duration:150,
		delay:600
	})



})(jQuery)
