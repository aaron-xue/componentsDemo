$(function(){
	var $btn = $('.tabCnt').find('li');
	$btn.click(function(){
		$(this).addClass('active').siblings().removeClass('active');
		$animate.removeClass().addClass($(this).text() + ' animated infinite');
		setTimeout(removeClass, 1000);
	});
	function removeClass(){
		$animate.removeClass();
	}
	var $tabNavItem = $('.tabNav').find('a');
	var $tabPane = $('.tabPane');
	$tabNavItem.each(function(i){
		$(this).click(function(ev){
            ev = ev||event;
            ev.preventDefault();
			$(this).parent().addClass('active').siblings().removeClass('active');
			$tabPane.eq(i).addClass('active').siblings().removeClass('active');
			return false;
		});
	});
});