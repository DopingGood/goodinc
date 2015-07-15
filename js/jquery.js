$(document).ready(function(){
	// $('.newsitem').hide();
	// $('.newsitem.active').show();
	$(".rarrow").click(
	function()
		{
			$('.houspad .newsitem').removeClass('active');
			$('.houspad .newsitem').next().addClass('active');
		}
	);
	$(".larrow").click(
	function()
		{
			console.log('test');
			$('.houspad .newsitem').removeClass('active');
			$('.houspad .newsitem').prev().addClass('active');
		}
	);
});


