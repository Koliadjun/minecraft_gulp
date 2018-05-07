$('.icon-menu').click(function(){
		 $(this).toggleClass('icon-menu-close');
		 $('.sidebar_menu').toggleClass('active');
})	 
$('.sidebar li').click(function(){
	$('.submenu').toggleClass('active');
})
var hammertime = new Hammer(document);
	hammertime.on('panright panleft', function(ev) {
	console.log(ev.type);
	if(ev.type == 'panright'){
		$('.icon-menu').addClass('icon-menu-close');
		$('.sidebar_menu').addClass('active');
	}
	if(ev.type == 'panleft'){
		$('.icon-menu').removeClass('icon-menu-close');
		$('.sidebar_menu').removeClass('active');
	}
});